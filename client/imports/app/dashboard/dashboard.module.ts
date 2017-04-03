import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { HomeModule } from './home';
import { TableModule } from './tables/table.module';
import { MyChartModule } from './charts/chart.module';
import { FormModule } from './forms/forms.module';
import { ElementModule } from './element/element.module';
import { GridModule } from './grid/grid.module';
import { ComponentModule } from './component/component.module';
import { BlankPageModule } from './blank-page/blank-page.module';
import { CkeditorModule } from './editor/ckeditor.module';
import { TreeViewModule } from './tree-view/tree-view.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    HomeModule,
    TableModule,
    MyChartModule,
    FormModule,
    ElementModule,
    GridModule,
    ComponentModule,
    BlankPageModule,
    CkeditorModule,
    TreeViewModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
