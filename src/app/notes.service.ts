import { Injectable } from '@angular/core';
import { Note } from './Note';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  baseUrl = environment.baseUrl;
  //Will need to detect and set each time
  private notesUrl = this.baseUrl;
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})}
  notes: Note[];

  constructor(private http: HttpClient) {
    this.notes = [];
  }

  ngOnInit(){
    
    this.getNotes().subscribe(n => this.notes = n)
  }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.notesUrl+"/notes");
  }

  addNote(newContent: Note): Observable<any>{
    return this.http.post<Note>(this.notesUrl+"/notes", newContent, this.httpOptions)
  }

  deleteNote(note: Note): Observable<Note>{
    const id = note.id;
    const url = `${this.notesUrl}/notes/${id}`;
    return this.http.delete<Note>(url, this.httpOptions);
  }
}
