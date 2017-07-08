import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// ngrx/store imports
import { HadisEffects } from './effects/hadis';
import { reducer } from './reducers';

// Components
import { ComponentsModule } from './components';
import { CONTAINERS } from './containers';

// Routes & Resolvers
import { AppComponent } from './app.component';
import { RESOLVERS } from './resolvers';
import { routes } from './app.routes';

// Services
import { AppServiceModule } from './services';



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
    RouterModule.forRoot(routes, { useHash: true }),
    // dumb | screen Components (parts of the container components)
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
  providers: [...RESOLVERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
