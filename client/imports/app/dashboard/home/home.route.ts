import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const HOME_ROUTES : Route[] = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent}
]
