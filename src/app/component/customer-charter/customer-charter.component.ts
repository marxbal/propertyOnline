import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-charter',
  templateUrl: './customer-charter.component.html',
  styleUrls: ['./customer-charter.component.css'],
})
export class CustomerCharterComponent implements OnInit {
  constructor() {}

  prefixLink: string = environment.homePage + 'customer-charter/#';

  ngOnInit(): void {}
}
