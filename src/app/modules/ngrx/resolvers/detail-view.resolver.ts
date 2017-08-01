import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import 'rxjs/add/operator/take';


import * as hadisItemAction from '../actions/hadisItem';
import { Hadis } from '../models/hadis';
import { HadisDataService } from '../services/hadis.data.service';

@Injectable()
export class DetailViewResolver implements Resolve<any> {
  constructor(
    private _hadisDataService: HadisDataService,
    private store: Store<any>,
    private action$: Actions
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.store.dispatch({ type: hadisItemAction.HADIS_BY_ID, payload: +route.params['id']});
    return this.action$.ofType(hadisItemAction.HADIS_BY_ID_SUCCESS)
      .map(state => state.payload)
      .take(1)
  }
}