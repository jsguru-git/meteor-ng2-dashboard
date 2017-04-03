import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { HOME_ROUTES } from './home/home.route';
import { TABLE_ROUTES } from './tables/table.routes';
import { CHART_ROUTES } from './charts/chart.routes';
import { FORMS_ROUTES } from './forms/forms.routes';
import { ELEMENT_ROUTES } from './element/element.routes';
import { GRID_ROUTES } from './grid/grid.routes';
import { COMPONENT_ROUTES } from './component/component.routes';
import { BLANKPAGE_ROUTES } from './blank-page/blank-page.routes';
import { CKEDITOR_ROUTES } from './editor/ckeditor.routes';
import { TREEVIEW_ROUTES } from './tree-view/tree-view.routes';

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      ...HOME_ROUTES,
      ...TABLE_ROUTES,
      ...CHART_ROUTES,
      ...FORMS_ROUTES,
      ...ELEMENT_ROUTES,
      ...GRID_ROUTES,
      ...COMPONENT_ROUTES,
      ...BLANKPAGE_ROUTES,
      ...CKEDITOR_ROUTES,
      ...TREEVIEW_ROUTES
    ]
  }
]
