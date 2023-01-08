import { NgModule } from '@angular/core';
import { FundComponent } from './fund.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: FundComponent },
]

@NgModule({
  declarations: [
    FundComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatCardModule,
  ]
})
export class FundModule { }
