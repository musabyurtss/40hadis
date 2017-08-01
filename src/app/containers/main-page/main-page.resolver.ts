import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import 'rxjs/add/operator/take';


import * as hadisAction from './../../modules/ngrx/index';
import { Hadis } from './../../modules/ngrx';
// import * as hadisActions from './../../modules/ngrx';
// import { Hadis } from '../../models/hadis';
// import { HadisDataService } from '../../services/hadis.data.service';

@Injectable()
export class MainPageResolver implements Resolve<Hadis> {
  constructor(
    // private _hadisDataService: HadisDataService,
    private store: Store<any>,
    private action$: Actions
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    // Hadis listesini almak icin action dispatch
    this.store.dispatch({ type: hadisAction.FETCH_HADISS, payload: '' });
    // datayi store dan cek ve data ile birlikte route gerceklestir.
    // state.payload = Hadis: Object
    return this.action$.ofType(hadisAction.FETCH_HADISS_SUCCES)
      .map(state => state.payload)
      .take(1)

  }
}