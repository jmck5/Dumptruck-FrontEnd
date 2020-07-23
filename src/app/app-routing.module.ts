import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotepadComponent } from './notepad/notepad.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { BaseComponent} from './base/base.component';

const routes: Routes = [
  {path:'', component: BaseComponent},
  {path:'notepad', component: NotepadComponent},
  {path:'allnotes', component: AllNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
