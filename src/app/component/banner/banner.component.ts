import { Component, OnInit } from '@angular/core';
import { Utility } from 'src/app/utils/utility';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollToReminder() {
    Utility.scroll('reminder');
  }
}
