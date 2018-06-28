import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // filters items by the specified key matching it with the searchText
  transform(items: any[], searchText: string, key: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it[key].toLowerCase().includes(searchText);
    });
  }
}
