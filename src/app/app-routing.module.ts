import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { IssuanceComponent } from './component/issuance/issuance.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
