import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './note/component/header/header.component';
import {FooterComponent} from './note/component/footer/footer.component';
import {NotesComponent} from './note/component/notes/notes.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './note/services/in-memory-data.service';
import {CreateEditNoteComponent} from './note/component/create-edit-note/create-edit-note.component';
import {ReactiveFormsModule} from "@angular/forms";
import {Store, StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {notesReducer} from "./note/store/note.reducers";
import {EffectsModule} from "@ngrx/effects";
import {NoteEffects} from "./note/store/note.effects";
import {NoteService} from "./note/services/note.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotesComponent,
    CreateEditNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    StoreModule.forRoot(
      reducers, {
        metaReducers
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // The below code line creates a dedicated slice (note) in the application
    // state for the notes module and attaches the reducers to it.
    StoreModule.forFeature('notes', notesReducer),
    EffectsModule.forRoot([NoteEffects]),
    // registers the effects in the node module state
    EffectsModule.forFeature([NoteEffects])
  ],
  providers: [NoteService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
