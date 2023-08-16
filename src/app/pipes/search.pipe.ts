import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    if(!value) return [];
    if(!searchText) return value;

    searchText = searchText.toLowerCase();

    return value.filter(item => {
      return item.symbol.toLowerCase().includes(searchText);
    });
  }

}
