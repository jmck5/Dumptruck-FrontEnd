import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Note} from '../Note';
import { NotesService } from '../notes.service';
@Component({
  selector: 'app-filtered-notes',
  templateUrl: './filtered-notes.component.html',
  styleUrls: ['./filtered-notes.component.scss']
})
export class FilteredNotesComponent implements OnInit {
  consolidatedUrl: String;
  filteredNotes: Note[];
  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.consolidatedUrl = environment.baseUrl+"/consolidated";
  }

  getNotesByKeyword(word: String): void {
    this.noteService.getNoteByKeyword(word).subscribe(food => {this.filteredNotes = food})
  }

  downloadByKeyword(word: String): any{
    this.noteService.downloadByKeyword(word);
  }

  downloadAllText(): any{
    console.log("Something wicked this way comes")
    this.noteService.downloadAll();
  }
}
