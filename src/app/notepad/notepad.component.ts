import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../Note';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})

export class NotepadComponent implements OnInit {
  
  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    
  }



  addNote(noteContent : string){
    let newNote = new Note(9999, noteContent);
    this.noteService.addNote(newNote ).subscribe(note => {this.noteService.notes.push(note);});
  }

}
