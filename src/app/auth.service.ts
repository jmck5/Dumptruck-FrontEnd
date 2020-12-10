import { Injectable, Input } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import  {Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import * as moment  from 'moment/moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor( private http :HttpClient) { 
    
  }

  //I'm not sure what shareReplay is
  login(username: string, password:string){
    return this.http.post<User>('http://192.168.1.73:58156/api/login', {username, password})
  }

  setSession(authResult){
    const expiresAt = moment().add(authResult.expiresIn,'second');
    localStorage.setItem('userName', authResult.userName)
    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout(){
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("userName")
  }

  public isLoggedIn(){
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut(){
    return !this.isLoggedIn();
  }

  getExpiration(){
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}

export class User{
  username;
  password;
  constructor(){}
}