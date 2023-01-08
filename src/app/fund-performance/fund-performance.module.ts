import { NgModule } from '@angular/core';
import { FundPerformanceComponent } from './fund-performance.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
const routes: Routes = [
  { path: '', component: FundPerformanceComponent },
]

@NgModule({
  declarations: [
    FundPerformanceComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    GoogleChartsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FontAwesomeModule
  ]
})
export class FundPerformanceModule { }
