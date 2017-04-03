import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElementComponent } from './element.component';

@NgModule({
    imports: [RouterModule],
    declarations: [ElementComponent],
    exports: [ElementComponent]
})

export class ElementModule { }
