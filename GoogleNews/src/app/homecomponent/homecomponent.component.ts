import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {
  index!:number;
  constructor(public dataService : DataService) { }

  ngOnInit(): void {
  }
  addFollowing(){
    this.index=this.dataService.followTopicHeader[0].topicArray.indexOf(this.dataService.isClickTopic);
    if(this.index===-1){
      this.dataService.followTopicHeader[0].topicArray.push(this.dataService.isClickTopic);
      this.dataService.isFollowingTopic=true;
    }else{
      this.dataService.followTopicHeader[0].topicArray.splice(this.index,1);
      this.dataService.isFollowingTopic=false;
    }
  }
  hideInputFocus(){
    this.dataService.isFocusInput=false;
    this.dataService.isShowSearchCard=false;
  }
  getSelectedTopic(topic:string){
    this.dataService.isClickTopic=topic;
    let value=this.dataService.followTopicHeader[0].topicArray.indexOf(topic);
    if(value>=0){
      this.dataService.isFollowingTopic=true;
    }
    else{
      this.dataService.isFollowingTopic=false;
    }
  }
}
