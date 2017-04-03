import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

import { Ckeditor } from './ckeditor.component';

@NgModule({
  imports: [
      RouterModule,
      CommonModule,
      FormsModule,
      CKEditorModule
  ],
  declarations: [
      Ckeditor
  ],
  exports: [
      Ckeditor
  ]
})
export class CkeditorModule {}
