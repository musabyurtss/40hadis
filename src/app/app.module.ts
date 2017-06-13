import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { ComponentsModule } from './components';

import { AppComponent } from './app.component';
import { ListPageComponent } from './containers/list-page/list-page.component';
import { DetailViewComponent } from './containers/detail-view/detail-view.component';

import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    DetailViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    // Components
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
