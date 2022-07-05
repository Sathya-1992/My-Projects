import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newscardcomponent',
  templateUrl: './newscardcomponent.component.html',
  styleUrls: ['./newscardcomponent.component.css']
})
export class NewscardcomponentComponent implements OnInit {
  @Input() newsDetails : any;
  constructor() { }

  ngOnInit(): void {
  }

}
