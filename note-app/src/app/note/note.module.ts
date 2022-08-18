import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService } from './services/note.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [NoteService]
})
export class NoteModule { }
