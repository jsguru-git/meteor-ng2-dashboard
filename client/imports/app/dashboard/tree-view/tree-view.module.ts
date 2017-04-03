import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeModule } from 'ng2-tree';

import { TreeView } from './tree-view.component';

@NgModule({
  imports: [
	RouterModule,
    CommonModule,
    FormsModule,
    TreeModule
  ],
  declarations: [
	TreeView
  ],
  exports: [
    TreeView
  ]
})
export class TreeViewModule {}
