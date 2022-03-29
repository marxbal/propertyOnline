import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { BannerComponent } from './component/banner/banner.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    BannerComponent,
    ReminderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [NgxPageScrollModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
