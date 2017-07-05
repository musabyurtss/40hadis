import { Routes } from '@angular/router';
import { MainPageComponent } from './containers/main-page/main-page.component';
import { DetailViewComponent, DetailViewResolver } from './containers/detail-view/detail-view.component';
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
    component: MainPageComponent
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
  ...adminRoutes,
  {
    path: '**', component: MainPageComponent
  }
];

export const RESOLVERS = [DetailViewResolver];
