import { Component, OnInit } from '@angular/core';
import { ERS_REIMBURSEMENT } from '../../models/ERS_REIMBURSEMENT';
import { ReimbursementService } from '../../Services/reimbursement.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-man-viewreimb',
  templateUrl: './man-viewreimb.component.html',
  styleUrls: ['./man-viewreimb.component.css']
})
export class ManViewreimbComponent implements OnInit {

  reimbs: ERS_REIMBURSEMENT[] = JSON.parse(localStorage.getItem('tables'));
  item: number;

  constructor(private reimbservice: ReimbursementService, private router: Router)  { }

  ngOnInit() {
    this.reimbservice.ReadAllreimb(this.reimbs).subscribe(read => {
    this.reimbservice.subscriber.next(read);
    localStorage.setItem('tables', JSON.stringify(read));
    });
    this.changer(0);
  }

  redirect(reimb: ERS_REIMBURSEMENT) {
    localStorage.setItem('current', JSON.stringify(reimb) );
    this.router.navigate(['reimbursement']);
  }
  changer(num: number) {
      this.item = num;
  }
  whatStatus() {
  }
}
