import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mainnewscomponent',
  templateUrl: './mainnewscomponent.component.html',
  styleUrls: ['./mainnewscomponent.component.css']
})
export class MainnewscomponentComponent implements OnInit {

  constructor(public dataService : DataService) { }

  ngOnInit(): void {
  }

}
