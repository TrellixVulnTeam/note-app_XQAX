import { Component, OnInit } from '@angular/core';
import { Note } from '../notes';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  constructor(private noteService: NoteService) {}

  notes: Note[] = [];

  ngOnInit(): void {
    // result ist Observable
    this.noteService.getNotes().subscribe((result) => {
      this.notes = result;
    });
  }
}
