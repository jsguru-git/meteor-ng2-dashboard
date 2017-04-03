import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BlankPageComponent } from './blank-page.component';

@NgModule({
  imports: [
		RouterModule,
    CommonModule
  ],
  declarations: [
		BlankPageComponent
  ],
  exports: [
    BlankPageComponent
  ]
})
export class BlankPageModule {}