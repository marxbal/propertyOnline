import { Component, Input, OnInit } from '@angular/core';
import { VERSION } from 'src/app/objects/app.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  version: string = VERSION;

  constructor() {}

  ngOnInit(): void {}
}
