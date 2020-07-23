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

  addNote(noteContent: string){
    let tempId=9999;
    let newNote = new Note(tempId, noteContent);
    this.noteService.addNote(newNote).subscribe(note => {this.notes.push(note);});
}
