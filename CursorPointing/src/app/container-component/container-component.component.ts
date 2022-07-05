import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-container-component',
  templateUrl: './container-component.component.html',
  styleUrls: ['./container-component.component.css']
})
export class ContainerComponentComponent implements OnInit {
  status!:number;
  constructor(public dataService:DataService, private routeId:ActivatedRoute) {
    this.routeId.params.subscribe(param => {
      this.dataService.highLightValue=param['x']+param['y'];
    })
    
  }
  
  ngOnInit(): void {
    
  }
  
  getSelectedEle(index:any){
    this.status=index;
  }
  disableDialogBox(){
    this.dataService.isShowDialogBox=false;
  }
  openDialog(){
    this.dataService.isShowDialogBox=true;
  }
}
