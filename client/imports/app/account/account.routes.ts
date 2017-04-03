import { Route } from '@angular/router';
import { LoginComponent, RegisterComponent } from './';

export const ACCOUNT_ROUTES: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: RegisterComponent }
];
