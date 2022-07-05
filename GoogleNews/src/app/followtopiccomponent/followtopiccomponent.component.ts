import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-followtopiccomponent',
  templateUrl: './followtopiccomponent.component.html',
  styleUrls: ['./followtopiccomponent.component.css']
})
export class FollowtopiccomponentComponent implements OnInit {
  @Input() followHeader:any;
  constructor() { }

  ngOnInit(): void {
  }

}
