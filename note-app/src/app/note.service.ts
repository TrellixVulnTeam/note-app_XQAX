import { Injectable } from '@angular/core';
import { Note } from './notes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private httpClient: HttpClient) {}

  notesUrl: string = '/api/notes';

  getNotes(): Observable<Note[]> {
    var response = this.httpClient.get<Note[]>(this.notesUrl);
    return response;
  }

  addNote(note: Note): Observable<Note> {
    var response = this.httpClient.post<Note>(this.notesUrl, note);
    return response;
  }

  deleteNote(note: Note): Observable<Note> {
    var response = this.httpClient.delete<Note>(this.notesUrl + '/' + note.id);
    return response;
  }
}
