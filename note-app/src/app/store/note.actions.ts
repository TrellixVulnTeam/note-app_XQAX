import { createAction, props } from '@ngrx/store';
import { Note } from "../notes";

export const loadAllNotes = createAction('[Note] Load Notes');
export const loadAllNotesFinished = createAction(
  '[Note] Load Notes Finished',
  props<{ payload: Note[] }>()
);

export const loadSingleNote = createAction(
  '[Note] Load Single Note',
  props<{ payload: string }>()
);
export const loadSingleNoteFinished = createAction(
  '[Note] Load Single Note Finished',
  props<{ payload: Note }>()
);

export const addNote = createAction(
  '[Note] Add Note',
  props<{ payload: string }>()
);
export const addNoteFinished = createAction(
  '[Note] Add Note Finished',
  props<{ payload: Note }>()
);

export const setAsDone = createAction(
  '[Note] SetAsDone',
  props<{ payload: Note }>()
);
export const setAsDoneFinished = createAction(
  '[Note] SetAsDone Finished',
  props<{ payload: Note }>()
);

export const deleteNote = createAction(
  '[Note] DeleteNote',
  props<{ payload: Note }>()
);
export const deleteNoteFinished = createAction(
  '[Note] DeleteNote Finished',
  props<{ payload: Note }>()
);
