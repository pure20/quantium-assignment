import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundPerformanceComponent } from './fund-performance.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule
  ]
})
export class FundPerformanceModule { }
