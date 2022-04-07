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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssuanceComponent } from './component/issuance/issuance.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyComponent } from './component/issuance/property/property.component';
import { LocationBuildingComponent } from './component/issuance/location-building/location-building.component';
import { BoundaryRelatedStructureComponent } from './component/issuance/boundary-related-structure/boundary-related-structure.component';
import { ProductsComponent } from './component/issuance/products/products.component';
import { CoverageComponent } from './component/issuance/coverage/coverage.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    BannerComponent,
    ReminderComponent,
    IssuanceComponent,
    PropertyComponent,
    LocationBuildingComponent,
    BoundaryRelatedStructureComponent,
    ProductsComponent,
    CoverageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [NgxPageScrollModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
