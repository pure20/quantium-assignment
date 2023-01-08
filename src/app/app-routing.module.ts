import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestorSummaryComponent } from './investor-summary/investor-summary.component';
import { LoginComponent } from './login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'fund', loadChildren: () => import('src/app/fund/fund.module').then(m => m.FundModule) },
  { path: 'investor-summary', loadChildren: () => import('src/app/investor-summary/investor-summary.module').then(m => m.InvestorSummaryModule) },
  { path: 'fund-performance', loadChildren: () => import('src/app/fund-performance/fund-performance.module').then(m => m.FundPerformanceModule) },
  { path: 'file-manager', loadChildren: () => import('src/app/file-manager/file-manager.module').then(m => m.FileManagerModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatSlideToggleModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
