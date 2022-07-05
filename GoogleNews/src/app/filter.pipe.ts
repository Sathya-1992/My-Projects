import { Pipe, PipeTransform } from '@angular/core';
import { NewsModel } from './newsModel';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(news: NewsModel[], searchTopic:string): any {
    searchTopic=searchTopic.toLocaleLowerCase();
    if(!news || !searchTopic){
      return news;
    }
    if(searchTopic=="latest"){
      return news;
    }
    else{
      return news.filter(data=>data.topic.toLocaleLowerCase().indexOf(searchTopic)!==-1);
    }
  }

}
