import { NgModule } from '@angular/core';
import { InvestorSummaryComponent } from './investor-summary.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
const routes: Routes = [
  { path: '', component: InvestorSummaryComponent },
]

@NgModule({
  declarations: [
    InvestorSummaryComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    GoogleChartsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule
  ]
})
export class InvestorSummaryModule { }
