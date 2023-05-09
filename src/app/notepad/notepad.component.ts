import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../Note';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})

export class NotepadComponent implements OnInit {
  author: string;

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.author = localStorage.getItem("userName");
  }

  addNote(noteContent : string){
    console.log(localStorage.getItem("accessToken"));
    console.log("The author is " + this.author);
    let newNote = new Note(9999, noteContent, this.author);
    this.noteService.addNote(newNote ).subscribe(note => {this.noteService.notes.push(note);});
  }

}
