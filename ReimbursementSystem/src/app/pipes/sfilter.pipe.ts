import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sfilter'
})
export class SfilterPipe implements PipeTransform {

    transform(value: number): string {
      switch (value) {
        case 1: {
          return 'Pending';
        }
        case 2: {
          return 'Approved';
        }
        case 3: {
          return 'Denied';
        }
  }

}}
