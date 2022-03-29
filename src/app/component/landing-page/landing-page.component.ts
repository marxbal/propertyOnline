import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.adjustBanner();
  }

  adjustBanner() {
    var windowHeight = window.innerHeight;
    var bannerHeight = windowHeight - 89;
    var pixel = bannerHeight + 'px';
    if (bannerHeight > 770) {
      var bannerSection = document.getElementById('bannerSection');
      if (bannerSection != null) {
        bannerSection.style.height = pixel;
      }

      var headerBg = document.getElementById('headerBg');
      if (headerBg != null) {
        headerBg.style.height = pixel;
      }
    }
  }
}
