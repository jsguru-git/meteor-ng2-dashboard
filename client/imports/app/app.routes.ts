import { Routes } from '@angular/router';
import { ACCOUNT_ROUTES,LoginComponent } from './account';
import { DASHBOARD_ROUTES } from './dashboard';

export const routes: Routes = [
	...ACCOUNT_ROUTES,
	...DASHBOARD_ROUTES,
	{ path: '**', component: LoginComponent }
];
