import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotepadComponent } from './notepad/notepad.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { BaseComponent } from './base/base.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotepadComponent,
    AllNotesComponent,
    BaseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
