import {Note} from "../notes";
import * as noteActions from './note.actions';
import {createReducer, on, Action} from '@ngrx/store';

/*
* State
* JavaScript-Objekt, das alles speichert, was wir im State ablegen wollen
* State ist beliebig erweiterbar, alles was die Notes angeht wird hier erstellt
* */
export interface ReducerNoteState {
  notes: Note[];
}

/*
* Initial State
* Initial State erstellen, um das Interface mit Standardwerten zu füllen
* */
export const initialState: ReducerNoteState = {
  notes: []
}

/*
* Funktion die einen State und eine Action als Parameter erhält und
* einen neuen State zurückgibt
* Jede Änderung an einem State geht von einem Reducer aus
* */
const noteReducerInternal = createReducer(
  initialState,
  on(
    noteActions.addNote,
    noteActions.deleteNote,
    noteActions.loadAllNotes,
    noteActions.loadSingleNote,
    noteActions.setAsDone,
    state => ({
      ...state,
      loading: true
    })
  ),
  on(noteActions.addNoteFinished, (state, {payload}) => ({
    ...state,
    loading: false,
    items: [...state.notes, payload]
  })),
  on(noteActions.loadAllNotesFinished, (state, {payload}) => ({
    ...state,
    loading: false,
    items: [...payload]
  })),
  on(noteActions.loadSingleNoteFinished, (state, {payload}) => ({
    ...state,
    loading: false,
    selectedItem: payload
  })),
  on(noteActions.deleteNoteFinished, (state, {payload}) => ({
    ...state,
    loading: false,
    items: [...state.notes.filter(x => x !== payload)]
  })),
  on(noteActions.setAsDoneFinished, (state, {payload}) => {
    const index = state.notes.findIndex(x => x.id === payload.id);

    state.notes[index] = payload;

    return {
      ...state
    };
  })
);

export function noteReducer(
  state: ReducerNoteState | undefined,
  action: Action
) {
  return noteReducerInternal(state, action);
}
