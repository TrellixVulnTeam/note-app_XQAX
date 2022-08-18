import {Note} from "../model/note.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {createReducer, on} from "@ngrx/store";
import {deleteNoteAction, noteActionTypes} from "./note.action";

/*
* Definiert den NoteState
* EntityState: Hält eine List von IDs und eine Bibliothek von Entitäten (Notizen)
* Custom Property notesLoaded: Zeigt an ob die Notes schon im State geladen sind
* */
export interface NoteState extends EntityState<Note> {
  notesLoaded: boolean;
}

/*
* Entity Adapter wird erstellt: Gibt Helper Functions
* */
export const adapter: EntityAdapter<Note> = createEntityAdapter<Note>();


/*
* Entity Adapter bezieht auch den InitialState der am Anfang auf false ist
* */
export const initialState = adapter.getInitialState({
  notesLoaded: false
})

export const notesReducer = createReducer(
  initialState,

  on(noteActionTypes.notesLoadedAction, (state, action) => {
    return adapter.addMany(
      action.notes,
      {...state, notesLoaded: true}
    );
  }),

  on(noteActionTypes.addNoteAction, (state, action) => {
    return adapter.addOne(action.note, state);
  }),

  on(noteActionTypes.deleteNoteAction, (state, action) => {
    // @ts-ignore
    return adapter.removeOne(action.note, state);
  }),
);

// Predefined Selectors vom Adapter, wird von unseren Custom Selectors später benutzt
export const { selectAll, selectIds } = adapter.getSelectors();
