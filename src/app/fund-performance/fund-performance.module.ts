import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundPerformanceComponent } from './fund-performance.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', component: FundPerformanceComponent },
]

@NgModule({
  declarations: [
    FundPerformanceComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    GoogleChartsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule
  ]
})
export class FundPerformanceModule { }
