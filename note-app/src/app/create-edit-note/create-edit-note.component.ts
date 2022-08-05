import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../notes';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-create-edit-note',
  templateUrl: './create-edit-note.component.html',
  styleUrls: ['./create-edit-note.component.scss'],
})
export class CreateEditNoteComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService
  ) {}

  note: Note = {
    id: 1000,
    title: 'Example Note',
    date: new Date(),
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  };

  pageTitle: string = 'Create new note';

  ngOnInit(): void {}

  save(): void {
    this.noteService.addNote(this.note).subscribe();
    this.router.navigate(['notes']);
  }

  dateChanged(event: Event) {
    console.log(event);
    var val = (event.target as HTMLInputElement).valueAsNumber;
    this.note.date = new Date(val);
  }
}
