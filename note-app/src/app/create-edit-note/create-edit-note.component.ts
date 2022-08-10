import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Note} from '../notes';
import {NoteService} from '../note.service';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-edit-note',
  templateUrl: './create-edit-note.component.html',
  styleUrls: ['./create-edit-note.component.scss'],
})
export class CreateEditNoteComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private formBuilder: FormBuilder
  ) {
  }

  note: Note = {
    id: 1000,
    title: 'Example Note',
    date: new Date(),
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  };

  noteForm = this.formBuilder.group({
    id: ['', Validators.required],
    title: ['', Validators.required],
    date: ['', Validators.required],
    text: ['', Validators.required]
  })

  pageTitle: string = 'Create new note';

  ngOnInit(): void {
    if (this.router.url != '/create') {
      // https://angular.io/api/router/ParamMap
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

      this.noteService.getNoteById(id).subscribe((result) => {
        this.note = result;
      });
    }
  }

  save(): void {
    console.log(this.note.id);
    /*this.note.id = this.noteForm.get('id')?.value;
    this.note.title = this.noteForm.get('title')?.value;
    this.note.date = this.noteForm.get('date')?.value;
    this.note.text = this.noteForm.get('text')?.value;*/

    this.noteService.addNote(this.note).subscribe();
    this.router.navigate(['notes']);
  }

  dateChanged(event: Event) {
    const val = (event.target as HTMLInputElement).valueAsNumber;
    this.note.date = new Date(val);
  }
}
