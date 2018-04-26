import { Component, OnInit } from '@angular/core';
import { ERS_USERS } from '../../models/ERS_USERS';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usi: ERS_USERS = JSON.parse(localStorage.getItem('credential'));
  userid: ERS_USERS;
  alert = ' ';
  constructor(private userservice: UserService) { }

  ngOnInit() {
    console.log(this.usi);
  }
  submit() {
    console.log(this.usi);
    this.userservice.updatesUser(this.usi).subscribe(update => {
        this.userservice.subscriber.next(update);
        if (this.usi === (update)) {
          this.alert = 'Seems like something was filled in incorrectly';
        } else {
          localStorage.setItem('credential', JSON.stringify(update));
        }
        console.log(localStorage.getItem('credential'));
      });
  }
}
