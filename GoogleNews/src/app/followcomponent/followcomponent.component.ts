import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-followcomponent',
  templateUrl: './followcomponent.component.html',
  styleUrls: ['./followcomponent.component.css']
})
export class FollowcomponentComponent implements OnInit {

  constructor(public dataService : DataService) { }

  ngOnInit(): void {
  }

}
