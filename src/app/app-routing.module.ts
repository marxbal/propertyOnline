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
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'customer-charter',
    component: CustomerCharterComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
