import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/utils/utility';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-charter',
  templateUrl: './customer-charter.component.html',
  styleUrls: ['./customer-charter.component.css'],
})
export class CustomerCharterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scroll(id: string) {
    Utility.scroll(id);
  }
}
