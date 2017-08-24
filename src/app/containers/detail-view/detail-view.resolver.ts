import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable,  } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import 'rxjs/add/operator/repeat';


import { Hadis, HadisState, State, getHadisItem } from './../../modules/ngrx';

import { HADIS_BY_ID, HADIS_BY_ID_SUCCESS } from '../../modules/ngrx';


@Injectable()
export class DetailViewResolver implements Resolve<any> {
  constructor(
    private store: Store<State>,
    private action$: Actions
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
     return this.store.select(getHadisItem).take(2);

    //  return
  }
}