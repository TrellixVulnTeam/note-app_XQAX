import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../../model/note.model';
import { NoteService } from '../../services/note.service';
import {AppState} from "../../../store/reducers";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {getAllNotes} from "../../store/note.selectors";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes$!: Observable<Note[]>;
  noteToBeUpdated!: Note;
  isUpdateActivated = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private store: Store<AppState>
  ) {}

  notes: Note[] = [];
  errorMessage: string = '';


  ngOnInit(): void {
    // result ist Observable
/*    this.noteService.getNotes().subscribe((result) => {
      this.notes = result;
    });*/
    /*this.noteService.getNotes().subscribe({
      next: notes => this.notes = notes,
      error: err => this.errorMessage = err
    })*/

    this.notes$ = this.store.select(getAllNotes);
  }

  delete(note: Note) {
    this.noteService.deleteNote(note).subscribe();
    // Die filter-Methode gibt ein Array zurück, in dem nur die Elemente sind, bei denen der Test in der Callback-Funktion true zurückgibt.
    // Statt über ein langes Array von JSON-Objekten zu iterieren, findet array.filter() passende Objekte eleganter
    // array.filter ( function(currentValue, index, arr), thisValue )
    // Frontend Updaten um gelöschte Notizen nicht mehr anzuzeigen

    // this.notes = this.notes.filter(function (currentNote) {
    //   return currentNote != note;
    // });

    this.notes = this.notes.filter((currentNote) => currentNote != note);
  }
}
