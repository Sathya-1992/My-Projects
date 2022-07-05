import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  divArray:{x:string,y:string}[]=[
    {x:"33px",y:"45px"},
    {x:"100px",y:"45px"},
    {x:"195px",y:"45px"},
    {x:"275px",y:"45px"}
  ];
  isShowDialogBox:boolean=false;
  highLightValue!:any;
  arrIndex!:any;

  addNewDiv(xVal:string,yVal:string){
    this.arrIndex=this.divArray.find(element => element.x==xVal&&element.y==yVal);
    if(!this.arrIndex){
      this.divArray.push({
        x:xVal,
        y:yVal
      });
    }
  }
  
  deleteDiv(index:number){
    this.divArray.splice(index,1);
  }
}
