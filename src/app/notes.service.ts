import { Injectable } from '@angular/core';
import { Note } from './Note';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { FAKENOTES } from './mock-notes';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notesUrl ='http://localhost:3000/api/dumptruck';
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})}
  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.notesUrl+"/allnotes");
  }

  addNote(newContent: Note): Observable<any>{
    return this.http.post<Note>(this.notesUrl+"/addnote", newContent, this.httpOptions)
  }
}
