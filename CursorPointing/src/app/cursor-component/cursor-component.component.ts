import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cursor-component',
  templateUrl: './cursor-component.component.html',
  styleUrls: ['./cursor-component.component.css']
})
export class CursorComponentComponent implements OnInit {
  divArray:any=[];
  status!:number;
  constructor(public dataService:DataService) { 
  }
  

  ngOnInit(): void {
    this.divArray = this.dataService.divArray;
  }
  createDivEle(event:any){
    this.dataService.addNewDiv(event.x+"px",event.y+"px");
  }

  highLightEle(x:string,y:string, event:Event){
    event.stopPropagation();
    this.dataService.highLightValue=x+y;
  }
  removeDiv(i:number){
    this.dataService.deleteDiv(i)
  }
}
