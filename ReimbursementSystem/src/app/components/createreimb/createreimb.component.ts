import { Component, OnInit } from '@angular/core';
import {ERS_REIMBURSEMENT} from '../../models/ERS_REIMBURSEMENT';
import {ERS_USERS} from '../../models/ERS_USERS';
import {ReimbursementService} from '../../Services/reimbursement.service';

@Component({
  selector: 'app-createreimb',
  templateUrl: './createreimb.component.html',
  styleUrls: ['./createreimb.component.css'],
})
export class CreatereimbComponent implements OnInit {
  now: Date = new Date;
  reimb: ERS_REIMBURSEMENT = new ERS_REIMBURSEMENT;
  usi: ERS_USERS = JSON.parse(localStorage.getItem('credential'));

  constructor(private reimbser: ReimbursementService) {
   }

  ngOnInit() {
    this.reimb.reimb_author = this.usi.ers_user_id;
    this.reimb.reimb_status_id = 1;
    this.reimb.reimb_submitted = JSON.stringify(this.now);

  }

  submit() {
    console.log(this.reimb);
    this.reimbser.Createreimb(this.reimb).subscribe(create => {
      this.reimbser.subscriber.next(create);
    });
  }
}
