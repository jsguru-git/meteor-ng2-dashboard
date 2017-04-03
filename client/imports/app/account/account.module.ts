import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent } from './';

@NgModule({
    // imports: [CommonModule, RouterModule],
    imports: [RouterModule],
    declarations: [LoginComponent,RegisterComponent],
    exports: [LoginComponent,RegisterComponent]
})

export class AccountModule { }
