import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';

import { ChartComponent } from './chart.component';

@NgModule({
  imports: [
		RouterModule,
    CommonModule,
    ChartModule
  ],
  declarations: [
		ChartComponent
  ],
  exports: [
    ChartComponent
  ]
})
export class MyChartModule {}