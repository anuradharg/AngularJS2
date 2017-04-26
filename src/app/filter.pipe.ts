import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    // check if there is no search term and return entire array
    if (term === undefined) return ninjas;

    // return the updated ninjas array
    return ninjas.filter(function(ninja) {
      return ninja.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
