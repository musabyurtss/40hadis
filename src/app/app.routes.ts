import { Routes } from '@angular/router';

import { MainPageComponent } from './containers/main-page/main-page.component';
import { DetailViewComponent } from './containers/detail-view/detail-view.component';

import { DetailViewResolver } from './resolvers/detail-view.resolver';
import { MainPageResolver } from './resolvers/main-page.resolver';

export const routes: Routes = [
  {
    path: 'hadis',
    component: MainPageComponent,
    resolve: {
      hadiss: MainPageResolver
    }
  },
  {
    path: 'hadis/:id',
    component: DetailViewComponent,
    resolve: {
      hadis: DetailViewResolver
    }
  },
  {
    path: '',
    redirectTo: '/hadis',
    pathMatch: 'full'
  },
  {
    path: '**', component: MainPageComponent
  }
];

export const RESOLVERS = [DetailViewResolver];
