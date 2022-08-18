import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getNotesAction, noteActionTypes} from "./note.action";
import {concatMap, map} from "rxjs/operators";
import {NoteService} from "../services/note.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Injectable()
export class NoteEffects {

  /*
  * It accepts the actions of type loadCourses and once the courses are retrieved
  * via the REST API, it maps the response to a new action type called coursesLoaded.
  * The retrieved list of courses is passed into the coursesLoaded action
  *  */
  loadNotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(noteActionTypes.getNotesAction),
      concatMap(() => this.noteService.getNotes()),
      map(notes => noteActionTypes.notesLoadedAction({notes}))
    )
  )

  // Perform the Service Operation
  // dispatch: false --> do not map the incoming action to a new action type
  addNote$ = createEffect(() =>
      this.actions$.pipe(
        ofType(noteActionTypes.addNoteAction),
        concatMap((action) => this.noteService.addNote(action.note)),
        tap(() => this.router.navigateByUrl('/notes'))
      ),
    {dispatch: false}
  )

  // Perform the Service Operation
  // dispatch: false --> do not map the incoming action to a new action type
  deleteNote$ = createEffect(() =>
      this.actions$.pipe(
        ofType(noteActionTypes.deleteNoteAction),
        concatMap((action) => this.noteService.deleteNote(action.note))
      ),
    {dispatch: false}
  );

  constructor(
    private noteService: NoteService,
    private actions$: Actions,
    private router: Router) {
  }

}
