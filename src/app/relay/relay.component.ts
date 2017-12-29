import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relay',
  templateUrl: './relay.component.html',
  styleUrls: ['./relay.component.css']
})
export class RelayComponent implements OnInit {

 @Input() name: string;
 @Input() status: string; // On/Off
 @Input() state: string; // Auto/On/Off

  constructor() {

  }

  ngOnInit() {
  }



}
/*
todo:
- Load status and state when init
- update state
- update status
- change state
*/
