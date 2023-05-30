import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  myimage: string = "assets/img/hero-bg.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
/*<li routerLinkActive="active">
         <a [routerLink]="['/projects']">SalesForceHelper</a>
      </li>*/
