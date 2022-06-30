import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { IssuanceComponent } from './component/issuance/issuance.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { CustomerCharterComponent } from './component/customer-charter/customer-charter.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'issuance',
    component: IssuanceComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'customer-charter',
    component: CustomerCharterComponent,
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
