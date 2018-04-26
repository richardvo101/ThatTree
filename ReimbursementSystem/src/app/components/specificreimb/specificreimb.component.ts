import { Component, OnInit } from '@angular/core';
import { ERS_REIMBURSEMENT } from '../../models/ERS_REIMBURSEMENT';
import { ERS_USERS} from '../../models/ERS_USERS';
import {Router} from '@angular/router';
import { ReimbursementService} from '../../Services/reimbursement.service';


@Component({
  selector: 'app-specificreimb',
  templateUrl: './specificreimb.component.html',
  styleUrls: ['./specificreimb.component.css']
})
export class SpecificreimbComponent implements OnInit {

  reimb: ERS_REIMBURSEMENT = JSON.parse(localStorage.getItem('current'));
  user: ERS_USERS = JSON.parse(localStorage.getItem('credential'));

  constructor(private route: Router, private reimbservice: ReimbursementService) { }

  ngOnInit() {
  }

  accept() {
      this.reimb.reimb_status_id = 2;
      this.reimb.reimb_resolver = this.user.ers_user_id;
      console.log(this.reimb);
      this.reimbservice.UpdateReimb(this.reimb).subscribe(update => {
      this.reimbservice.subscriber.next(update);
      const json = JSON.stringify(this.reimb);
      localStorage.setItem('current', json);
      console.log(this.reimb);
      this.reimbservice.UpdateReimb(this.reimb);
   });
   location.reload();
      this.route.navigate(['man-viewreimb']);
}

  deny() {
      this.reimb.reimb_status_id = 3;
      this.reimb.reimb_resolver = this.user.ers_user_id;
      console.log(this.reimb);
      this.reimbservice.UpdateReimb(this.reimb).subscribe(update => {
      this.reimbservice.subscriber.next(update);
      const json = JSON.stringify(this.reimb);
      localStorage.setItem('current', json);
      console.log(this.reimb);
      this.reimbservice.UpdateReimb(this.reimb);
   });
   location.reload();
      this.route.navigate(['man-viewreimb']);
  }
  back() {
    this.route.navigate(['man-viewreimb']);
  }

}
