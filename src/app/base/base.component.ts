import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit(): void {
    
  }

  logout(): void {
    this.authservice.logout();
    this.router.navigateByUrl('/');
  }

}
