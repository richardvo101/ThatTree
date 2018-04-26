import { Pipe, PipeTransform } from '@angular/core';
import { ERS_REIMBURSEMENT } from '../models/ERS_REIMBURSEMENT';

@Pipe({
  name: 'tablefilter'
})
export class TablefilterPipe implements PipeTransform {

  transform(reimbs: ERS_REIMBURSEMENT[], filter: number): ERS_REIMBURSEMENT[] {
    if (filter===0){
      return reimbs;
    }
    return reimbs.filter(reimb => reimb.reimb_status_id === filter);
  }

}
