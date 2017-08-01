import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// ngrx/store imports
import { HadisEffects } from './modules/ngrx';
import { reducer } from './modules/ngrx/reducers';

// Components
import { ComponentsModule } from './components';
// Containers
import { CONTAINERS } from './containers';
import { ContainerModule } from './containers/container.module';

import { AppComponent } from './app.component';

// Services
import { AppServiceModule } from './modules/ngrx';



@NgModule({
  declarations: [
    AppComponent,
    // container components
    ...CONTAINERS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppServiceModule,
    RouterModule.forRoot([]),
    ContainerModule,
    // dumb | screen Components (part of the container components)
    ComponentsModule,
    /** State Management initialize */
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
