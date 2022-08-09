import {Injectable} from '@angular/core';
import {Note} from './notes';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private httpClient: HttpClient) {}

  notesUrl: string = '/api/notes';

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.notesUrl);
  }

  getNoteById(id: Number): Observable<Note> {
    return this.httpClient.get<Note>(this.notesUrl + '/' + id);
  }

  addNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(this.notesUrl, note);
  }

  deleteNote(note: Note): Observable<Note> {
    return this.httpClient.delete<Note>(this.notesUrl + '/' + note.id);
  }
}
