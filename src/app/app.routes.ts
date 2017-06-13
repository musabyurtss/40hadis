import { Routes } from '@angular/router';

import { ListPageComponent } from './containers/list-page/list-page.component';
import { DetailViewComponent } from './containers/detail-view/detail-view.component';


export const routes: Routes = [
  {
    path: 'hadis',
    component: ListPageComponent
  },
  {
    path: 'hadis/:id',
    component: DetailViewComponent
  }
];
