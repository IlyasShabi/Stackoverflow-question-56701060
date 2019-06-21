import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalNumbers'
})
export class TotalNumbersPipe implements PipeTransform {

  transform(thing: any, args?: any): any {
    const arr = thing.children.map(child => child.grandchildren.length);
    const inc = (a, b) => a + b;
    return arr.reduce(inc , 0);
  }

}