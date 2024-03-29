import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import {AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})

export class LoginComponent implements OnInit {
  
  loggedin: boolean;
  form: FormGroup;

  constructor(private fb:FormBuilder, private authservice: AuthService, private router: Router) 
  {
    this.form = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });

    this.loggedin = false;
   }

  ngOnInit(): void {
    if(this.loggedin) this.router.navigateByUrl('/home');
  }

  login(){
    const val = this.form.value;
    console.log("trying to log in")
    if(val.username && val.password){
      console.log("Input is valid not necessarily correct")
      this.authservice.login(val.username, val.password).subscribe(
        res=>{
          this.authservice.setSession(res);
          this.loggedin = true;
         // res.username;
          console.log("User is logged in");
          this.router.navigateByUrl('/home');
        }
      );
    }
    else{console.log('Input does not appear to be valid')}
  }

}
