import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-containercomponent',
  templateUrl: './containercomponent.component.html',
  styleUrls: ['./containercomponent.component.css']
})
export class ContainercomponentComponent implements OnInit {

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

}
