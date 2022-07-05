import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {
  xValue!:any;
  yValue!:any;
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }
  addValues(){
    if(this.xValue&&this.yValue){
      this.dataService.addNewDiv(this.xValue+"px",this.yValue+"px");
    }
    this.dataService.isShowDialogBox=false;
  }

}
