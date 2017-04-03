import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormComponent } from './forms.component';

@NgModule({
  imports: [
		RouterModule,
    CommonModule
  ],
  declarations: [
		FormComponent
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule {}