import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CONTAINERS } from './index';

// Container routes
import { mainPageRoutes } from './main-page/main-page.routes';
import { detailViewRoutes } from './detail-view/detail-view.routes';
const CONTAINER_ROUTES = [
    ...mainPageRoutes,
    ...detailViewRoutes,
    {
        path: '**',
        redirectTo: '/hadisler',
        pathMatch: 'full'
    },
];

// Container resolvers
import { MainPageResolver } from './main-page/main-page.resolver';
import { DetailViewResolver } from './detail-view/detail-view.resolver';

const CONTAINER_RESOLVERS = [
    MainPageResolver,
    DetailViewResolver
];


@NgModule({
    imports: [RouterModule.forChild(CONTAINER_ROUTES)],
    declarations: [],
    providers: CONTAINER_RESOLVERS,
    exports: [RouterModule,]
})
export class ContainerModule { }
