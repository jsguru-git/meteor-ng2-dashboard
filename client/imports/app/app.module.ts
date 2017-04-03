import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';
import { DashboardModule } from './dashboard';

import { routes } from './app.routes';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [    
  ],
  // Modules
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AccountModule,
    DashboardModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
