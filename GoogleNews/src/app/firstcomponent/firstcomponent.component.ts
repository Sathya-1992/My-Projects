import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }
  inputStyleChange(){
    this.dataService.isShowSearchCard=false;
    this.dataService.isFocusInput=false;
    console.log(this.dataService.isFocusInput)
  }
}
