import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {
  searchText="";
  constructor(public dataService : DataService, public router:Router) { }

  ngOnInit(): void {
  }
  selectList(event:Event){
    event.stopPropagation();
    let val:any = (<HTMLElement>event.target).textContent;
    this.filterTopic(val);
  }

  getTopic(event:Event){
    event.stopPropagation();
    let inputValue = (<HTMLInputElement>event.target).value;
    this.filterTopic(inputValue);
  }
  filterTopic(value:string){
    if(value){
      this.searchText = value;
      this.dataService.isClickTopic=value;
    }
    this.dataService.isShowSearchCard=false;
    this.dataService.isFocusInput=false;
    this.router.navigate(['/Home',value]);
  }
}
