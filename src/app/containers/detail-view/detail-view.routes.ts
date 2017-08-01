
import { Routes } from '@angular/router';

import { DetailViewComponent } from './detail-view.component';
import { DetailViewResolver } from './detail-view.resolver';
export const detailViewRoutes: Routes = [
    {
        path: 'hadis/:id',
        component: DetailViewComponent,
        resolve: {
            hadis: DetailViewResolver
        }
    }
];

