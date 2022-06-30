import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-charter',
  templateUrl: './customer-charter.component.html',
  styleUrls: ['./customer-charter.component.css'],
})
export class CustomerCharterComponent implements OnInit {
  constructor() {}

  prefixLink: string = '/customer-charter/#';

  ngOnInit(): void {}
}
