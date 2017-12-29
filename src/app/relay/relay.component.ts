import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relay',
  templateUrl: './relay.component.html',
  styleUrls: ['./relay.component.css']
})
export class RelayComponent implements OnInit {

 @Input() name: string;
  status = 'undef';

  constructor() {

  }

  ngOnInit() {
  }

}
