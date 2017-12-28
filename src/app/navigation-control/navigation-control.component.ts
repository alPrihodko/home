import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation-control',
  templateUrl: './navigation-control.component.html',
  styleUrls: ['./navigation-control.component.css']
})
export class NavigationControlComponent implements OnInit {

  //constructor() { }

  ngOnInit() {
  }

  constructor(private route: ActivatedRoute, private router: Router) {};

  appRoute(event, to) {
    this.router.navigate(['/', to]).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  };


  appRouteHome(event) {
    this.router.navigate(['/']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  };

}
