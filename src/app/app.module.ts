

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './components';

import { AppComponent } from './app.component';
import { ListPageComponent } from './containers/list-page/list-page.component';
import { DetailViewComponent } from './containers/detail-view/detail-view.component';
import { AdminPanelComponent } from './containers/admin-panel/admin-panel.component';

import { HadisServiceModule } from './services/index';

import { routes } from './app.routes';

import { HadisEffects } from './effects/hadis';
import { reducer } from './reducers';

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
    HadisServiceModule,
    RouterModule.forRoot(routes, { useHash: true }),
    // Components
    ComponentsModule,
    // Store
    StoreModule.provideStore(reducer),
    // Effects
    EffectsModule.run(HadisEffects),
    // Development icin. Daha sonra kaldirilacak.
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
