import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-newscomponent',
  templateUrl: './sub-newscomponent.component.html',
  styleUrls: ['./sub-newscomponent.component.css']
})
export class SubNewscomponentComponent implements OnInit {
  @Input() subNewsDetails : any;
  @Input() indexValue : any;
  constructor() { }

  ngOnInit(): void {
  }

}
