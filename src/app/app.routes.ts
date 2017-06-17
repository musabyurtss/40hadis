import { Routes } from '@angular/router';

import { ListPageComponent } from './containers/list-page/list-page.component';
import { DetailViewComponent } from './containers/detail-view/detail-view.component';
import { AdminPanelComponent } from './containers/admin-panel/admin-panel.component';


export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminPanelComponent
  }
];

export const routes: Routes = [
  {
    path: 'hadis',
    component: ListPageComponent
  },
  {
    path: 'hadis/:id',
    component: DetailViewComponent
  },
  {
    path: '',
    redirectTo: '/hadis',
    pathMatch: 'full'
  },
  ...adminRoutes,
  {
    path: '**', component: ListPageComponent
  }
];
