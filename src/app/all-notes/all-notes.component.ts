import { Component, OnInit } from '@angular/core';
import { Note } from '../Note';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {

  notes: Note[];

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(ScoobyDoo=> {this.noteService.notes = ScoobyDoo; this.notes= ScoobyDoo });
    
  }

  getNotes(): void {
    this.noteService.getNotes().subscribe(ScoobyDoo => this.notes = ScoobyDoo);
  }

}
