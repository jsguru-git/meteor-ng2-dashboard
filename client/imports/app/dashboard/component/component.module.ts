import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
		AlertModule,
		ButtonsModule,
		DropdownModule,
		PaginationModule,
		ProgressbarModule,
		RatingModule,
		TabsModule,
		TooltipModule,
		ModalModule,
		TypeaheadModule
	} from 'ng2-bootstrap';


import { ComponentComponent } from './component.component';

@NgModule({
    imports: [
    	RouterModule,
    	FormsModule,
  		CommonModule,
  		AlertModule.forRoot(),
  		ButtonsModule,
  		DropdownModule.forRoot(),
  		PaginationModule.forRoot(),
  		ProgressbarModule,
  		RatingModule,
  		TabsModule.forRoot(),
  		TooltipModule.forRoot(),
  		ModalModule.forRoot(),
  		TypeaheadModule
  	],
    declarations: [ComponentComponent],
    exports: [ComponentComponent]
})

export class ComponentModule { }
