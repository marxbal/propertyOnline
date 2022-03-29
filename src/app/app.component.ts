import { Component, OnInit } from '@angular/core';
import { VERSION } from './objects/app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'propertyOnline';
  version: string = VERSION;

  ngOnInit() {

  }
}
