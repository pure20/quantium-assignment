import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundComponent } from './fund.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: FundComponent },
]

@NgModule({
  declarations: [
    FundComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class FundModule { }
