import { Pipe, PipeTransform } from '@angular/core';
import { ERS_REIMBURSEMENT } from '../models/ERS_REIMBURSEMENT';

@Pipe({
  name: 'tfilter',
  pure: false
})
export class TfilterPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1: {
        return 'Travel';
      }
      case 2: {
        return 'Medical';
      }
      case 3: {
        return 'Business';
      }
      case 4: {
        return 'Other';
      }
    }
  }
}
