import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: string[], searchText:string):any {
    if(!value){
      return [];
    }
    if(!searchText){
      return value;
    }
    searchText=searchText.toLocaleLowerCase();
    return value.filter(list => {
      return list.toLocaleLowerCase().includes(searchText);
    });
  }

}
