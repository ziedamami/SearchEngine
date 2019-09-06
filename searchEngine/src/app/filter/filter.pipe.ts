import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAll'
})
export class FilterPipe implements PipeTransform {


  transform(arrBooks: any, filter: any): any {
    if (filter && Array.isArray(arrBooks)) {
      return arrBooks.filter((data) => this.matchValue(data.volumeInfo, filter));
    } else {
      return arrBooks;

    }
  }
  matchValue(data, value) {
    return Object.keys(data).map((key) => {
      return new RegExp(value, 'gi').test(data[key]);
    }).some(result => result);
  }

}


