import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ERS_USERS } from '../../models/ERS_USERS';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credential: ERS_USERS = new ERS_USERS();
  loggedUser = localStorage.getItem('credential');
  isValid: boolean;

  alert = ' ';


  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {
    if ( this.loggedUser != null) {
      this.userservice.subscriber.next(JSON.parse(localStorage.getItem('credential')));
      this.router.navigate(['createreimb']);
    }
  }
  submit() {
    console.log(this.credential.ers_password);
    this.userservice.loginUser(this.credential).subscribe(users => {
    if (users == null) {
      this.isValid = !this.isValid;
      this.alert = 'Incorrect Credentials';
    } else {
      this.userservice.subscriber.next(users);

      localStorage.setItem('credential', JSON.stringify(users));
      console.log(users);
      localStorage.setItem('status', JSON.stringify(users.user_role_id));
      location.reload();
      if(this.userservice.admin()){
        this.router.navigate(['man-viewreimb']);
      }
      this.router.navigate(['createreimb']);
    }
  });
  }
}

