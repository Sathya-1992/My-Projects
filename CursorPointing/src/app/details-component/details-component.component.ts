import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {
  @Output() public isShowDialog:any = new EventEmitter<boolean>();
  constructor(public dataService:DataService) { }
  divArray:any=[];
  status!:number;
  ngOnInit(): void {
    this.divArray = this.dataService.divArray;
  }
  deleteDivEle(index:number){
    this.dataService.deleteDiv(index);
  }
  getSelectedEle(index:number){
    this.status=index;
  }

  highLightDiv(x:string,y:string){
    this.dataService.highLightValue=x+y;
  }
  
}
