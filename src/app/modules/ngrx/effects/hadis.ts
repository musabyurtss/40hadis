
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import * as hadisActions from '../actions/hadis';
import * as hadisItemActions from '../actions/hadisItem';
import { HadisDataService } from '../services/hadis.data.service';
import { Hadis } from './../models/hadis';

@Injectable()
export class HadisEffects {

    constructor(private $actions: Actions, private hDataService: HadisDataService) { }


    // FETCH_HADISS action dispatch edildiginde tetiklenir.
    @Effect()
    getHadisList: Observable<Action> = this.$actions
        .ofType(hadisActions.FETCH_HADISS)
        // .startWith(new hadisActions.FetchHadissAction())
        .switchMap((action) => {

            return this.hDataService.getHadiss(action.payload.skip, action.payload.limit)

                .map((hadiss: Hadis[]) => new hadisActions.FetchHadissSuccessAction(hadiss))
                .catch(error => of(new hadisActions.FetchHadissFailAction(error)))
        }
        )

    // HADIS_BY_ID action dispatch edildiginde tetiklenir.
    @Effect()
    getHadisById: Observable<Action> = this.$actions
        .ofType(hadisItemActions.HADIS_BY_ID)
        .switchMap(
        (action) => {
            return this.hDataService.getHadisById(action.payload)
                .map(hadisItem => new hadisItemActions.HadisByIdSuccessAction(hadisItem))
                .catch(error => of(new hadisItemActions.HadisByIdFailAction(error)))
        }
        )



}