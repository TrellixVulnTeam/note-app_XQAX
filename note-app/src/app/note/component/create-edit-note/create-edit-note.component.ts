import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {Note} from '../../model/note.model';
import {NoteService} from '../../services/note.service';
import {FormBuilder, Validators} from "@angular/forms";
import {AppState} from "../../../store/reducers";
import {Store} from "@ngrx/store";

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
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
  }



  note: Note = {
    id: 1000,
    title: 'Example Note',
    date: new Date(),
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  };

  /* https://angular.io/guide/reactive-forms#using-the-formbuilder-service-to-generate-controls */
  noteForm = this.formBuilder.group({
    id: ['', Validators.required],
    title: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    date: ['', Validators.required],
    text: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
  })

  pageTitle: string = 'Create new note';

  ngOnInit(): void {
    if (this.router.url != '/create') {

      // https://angular.io/api/router/ParamMap
      const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

      this.pageTitle = 'Edit Note with the id ' + id;

      this.noteService.getNoteById(id).subscribe((result) => {

        /* Note aus der Datenbank holen */
        this.note = result;

        /* Geholte Note aus der Datenbank in noteForm (formBuilder) für Anzeige in View setzen */
        this.noteForm.setValue({
          id: this.note.id,
          title: this.note.title,
          date: this.note.date,
          text: this.note.text
        })
      });
    }
  }

  save(): void {
    /* Eingegebene Werte von Client in HTML Form holen */
    this.note.id = this.noteForm.get('id')?.value;
    this.note.title = this.noteForm.get('title')?.value;
    this.note.date = this.noteForm.get('date')?.value;
    this.note.text = this.noteForm.get('text')?.value;

    this.noteService.addNote(this.note).subscribe();
    this.router.navigate(['notes']);
  }

  dateChanged(event: Event) {
    const val = (event.target as HTMLInputElement).valueAsNumber;
    this.note.date = new Date(val);
  }
}
