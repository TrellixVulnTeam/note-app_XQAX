import {createFeatureSelector, createSelector} from "@ngrx/store";
import {NoteState, selectAll} from "./note.reducers";

export const noteFeatureSelector = createFeatureSelector<NoteState>('notes');

// Alle Note Entitäten aus einem Array erhalten
export const getAllNotes = createSelector(
  noteFeatureSelector,
  selectAll
)

// Sind die Notes schon in den State geladen?
export const areNotesLoaded = createSelector(
  noteFeatureSelector,
  state => state.notesLoaded
);
