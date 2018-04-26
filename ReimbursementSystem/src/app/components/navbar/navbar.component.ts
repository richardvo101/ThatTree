import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { ERS_USERS } from '../../models/ERS_USERS';
import {UserService} from '../../Services/user.service';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {
  }
  logout() {
    localStorage.clear();
    location.reload();
    this.router.navigate(['login']);
  }
  isLoggedIn(): boolean {
    return this.user.isLoggedIn();
  }
  whatStatus(): boolean {
    return this.user.whatStatus();
  }
  admin() {
    return this.user.admin();
  }
}
