import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from './file-manager.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GoogleChartsModule, ChartType } from 'angular-google-charts';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', component: FileManagerComponent },
]

@NgModule({
  declarations: [
    FileManagerComponent
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
export class FileManagerModule { }
