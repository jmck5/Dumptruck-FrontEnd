import { Injectable, Type } from '@angular/core';
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
  // this can clearley be refactored to some version of environment.baseUrl + "/notes/"
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json','Access-Control-Allow-Methods':"GET, POST, OPTIONS, PUT, DELETE"})}
  alternateOptions = {headers: new HttpHeaders({'Content-Type':'text/plain','Accept-Type':"text/plain", "Accept":"text/*"})}
  notes: Note[];

  constructor(private http: HttpClient) {
    this.notes = [];
  }

  ngOnInit(){
    
    this.getNotes().subscribe(n => this.notes = n)
  }

  getNotes(): Observable<Note[]>{
    //return new Observable<Note[]>();
    return this.http.get<Note[]>(this.notesUrl+"/notes");
  }

  getNoteByKeyword(word: String): Observable<Note[]>{
    return this.http.get<Note[]>(this.notesUrl+"/notes/word?myword="+word)
  }

  downloadByKeyword(word: String): Observable<any>{
    return this.http.get<any>(this.notesUrl+"/notes/getselected/"+word)
  }
  
  addNote(newContent: Note): Observable<any>{
    return this.http.post<Note>(this.notesUrl+"/notes", newContent, this.httpOptions)
  }

  deleteNote(note: Note): Observable<Note>{
    const id = note.id;
    const url = `${this.notesUrl}/notes/${id}`;
    return this.http.delete<Note>(url, this.httpOptions);
  }

  downloadAll(): Observable<any>{
    //console.log(this.http.get<any>(this.notesUrl+"/consolidated", this.httpOptions));
    console.log("Here");
    return this.http.get<any>(this.notesUrl+"/consolidated", this.alternateOptions);
  }
}
