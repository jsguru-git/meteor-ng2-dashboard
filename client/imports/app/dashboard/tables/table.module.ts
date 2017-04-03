import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';

@NgModule({
    imports: [RouterModule,CommonModule],
    declarations: [TableComponent],
    exports: [TableComponent]
})

export class TableModule { }
