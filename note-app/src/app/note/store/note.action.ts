import {Note} from "../model/note.model";
import {createAction, props} from "@ngrx/store";
import {Update} from "@ngrx/entity";

/*
* Allgemein zu createAction:
* https://v11.ngrx.io/api/store/createAction
* type: Describes the action that will be dispatched
* config: Additional metadata needed for the handling of the action. See Usage Notes.
* Optional. Default is undefined.
* */

// Special Action: Informiert den Store das die Notes erfolgreich geladen sind
export const notesLoadedAction = createAction(
  '[Notes Effect] Notes Loaded Successfully',
  props<{ notes: Note[] }>()
);

// geliefert von Komponenten
export const getNotesAction = createAction(
  '[Notes List] Load Notes via Service',
);

export const getNoteByIdAction = createAction(
  '[Show Note] Show note',
  props<{ id: number }>()
)

export const addNoteAction = createAction(
  '[Add Note Component] Add Note',
  props<{ note: Note }>()
)

export const deleteNoteAction = createAction(
  '[Notes List Operation] Delete Note',
  props<{ note: Note }>()
)

export const noteActionTypes = {
  getNotesAction,
  getNoteByIdAction,
  notesLoadedAction,
  addNoteAction,
  deleteNoteAction
};
