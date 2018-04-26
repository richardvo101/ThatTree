import { Component, OnInit } from '@angular/core';
import { ERS_USERS } from '../../models/ERS_USERS';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  usi: ERS_USERS = new ERS_USERS;
  alert = '';
  item: number;

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }
  onChange() {
    console.log(this.item);
  }
  admin() {
    return this.userservice.admin();
  }
  submit() {
    console.log(this.usi);
    this.usi.user_role_id = this.item;
    this.userservice.createUser(this.usi).subscribe(create => {
        this.userservice.subscriber.next(create);
        if (((create === null))) {
          this.alert = 'Seems like something was filled in incorrectly or someone has already taken your usernames';
        }
      });
  }

}
