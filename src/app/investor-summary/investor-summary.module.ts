import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestorSummaryComponent } from './investor-summary.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GoogleChartsModule, ChartType } from 'angular-google-charts';

const routes: Routes = [
  { path: '', component: InvestorSummaryComponent },
]

@NgModule({
  declarations: [
    InvestorSummaryComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    GoogleChartsModule,
    
  ]
})
export class InvestorSummaryModule { }
