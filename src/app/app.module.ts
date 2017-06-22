import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';


import { ComponentsModule } from './components';

import { AppComponent } from './app.component';
import { ListPageComponent } from './containers/list-page/list-page.component';
import { DetailViewComponent } from './containers/detail-view/detail-view.component';
import { AdminPanelComponent } from './containers/admin-panel/admin-panel.component';

import { routes } from './app.routes';

import {HadisReducer} from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    DetailViewComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    // Components
    ComponentsModule,
    // Store
    StoreModule.provideStore({HadisReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
