import { Injectable } from '@angular/core';
import { Note } from './Note';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  //Will need to detect and set each time
  private notesUrl ='http://localhost:3000/api/dumptruck';
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})}
  notes: Note[];

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(){
    
    this.getNotes().subscribe(n => this.notes = n)
  }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.notesUrl+"/allnotes");
  }

  addNote(newContent: Note): Observable<any>{
    return this.http.post<Note>(this.notesUrl+"/addnote", newContent, this.httpOptions)
  }
}
