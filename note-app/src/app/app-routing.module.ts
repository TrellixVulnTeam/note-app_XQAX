import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { CreateEditNoteComponent } from './create-edit-note/create-edit-note.component';

const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
    path: 'create',
    component: CreateEditNoteComponent,
  },
  {
    path: 'edit/:id',
    component: CreateEditNoteComponent,
  },
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
