import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import 'rxjs/add/operator/take';


import { HADIS_BY_ID, HADIS_BY_ID_SUCCESS } from '../../modules/ngrx';

// import * as hadisItemAction from '../../actions/hadisItem';
// import { Hadis } from '../../models/hadis';
// import { HadisDataService } from '../../services/hadis.data.service';

@Injectable()
export class DetailViewResolver implements Resolve<any> {
  constructor(
    private store: Store<any>,
    private action$: Actions
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.store.dispatch({ type: HADIS_BY_ID, payload: +route.params['id'] });
    return this.action$.ofType(HADIS_BY_ID_SUCCESS)
      .map(state => {
        console.log(state);
        console.log(state.payload[1]);

        return state.payload[1]
      })
      .take(1)
  }
}