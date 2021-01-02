import { Component, OnInit } from '@angular/core';
import {Note} from '../Note';
import { NotesService } from '../notes.service';
@Component({
  selector: 'app-filtered-notes',
  templateUrl: './filtered-notes.component.html',
  styleUrls: ['./filtered-notes.component.scss']
})
export class FilteredNotesComponent implements OnInit {

  filteredNotes: Note[];
  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
  }

  getNotesByKeyword(word: String): void {
    this.noteService.getNoteByKeyword(word).subscribe(food => {this.filteredNotes = food})
  }

}
