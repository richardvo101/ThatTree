import { Component, OnInit } from '@angular/core';
import {ERS_REIMBURSEMENT} from '../../models/ERS_REIMBURSEMENT';
import {ERS_USERS} from '../../models/ERS_USERS';
import {ReimbursementService} from '../../Services/reimbursement.service';

@Component({
  selector: 'app-viewhistory',
  templateUrl: './viewhistory.component.html',
  styleUrls: ['./viewhistory.component.css']
})
export class ViewhistoryComponent implements OnInit {

  reimbs: ERS_REIMBURSEMENT[] = JSON.parse(localStorage.getItem('mine'));
  user: ERS_USERS = JSON.parse(localStorage.getItem('credential'));
  item: number;
  constructor(private reimbservice: ReimbursementService) {

  }
  ngOnInit() {
    this.reimbservice.Readmyreimb(this.user).subscribe(readmine => {
    this.reimbservice.subscriber.next(readmine);
    console.log(readmine);
    localStorage.setItem('mine', JSON.stringify(readmine));
    console.log(localStorage.getItem('mine'));
    this.changer(0);
    });
  }
  changer(num: number) {
    this.item = num;
}
}
