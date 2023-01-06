import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestorSummaryComponent } from './investor-summary/investor-summary.component';
import { LoginComponent } from './login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes: Routes = [
  { path: '', redirectTo: '/investor-summary', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'investor-summary', component: InvestorSummaryComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatSlideToggleModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
