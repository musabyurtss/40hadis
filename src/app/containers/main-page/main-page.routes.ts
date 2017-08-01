
import { Routes } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { MainPageResolver } from './main-page.resolver';

export const mainPageRoutes: Routes = [
    {
        path: 'hadisler',
        component: MainPageComponent,
        resolve: {
            hadiss: MainPageResolver
        }
    }
];

