
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
import { HadisDataService } from './../services/hadis.data.service';
import { Hadis } from './../models/hadis';

@Injectable()
export class HadisEffects {

    constructor(private $actions: Actions, private hDataService: HadisDataService) { }


    @Effect()
    getHadisList: Observable<Action> = this.$actions
        .ofType(hadisActions.FETCH_HADISS)
        .startWith(new hadisActions.FetchHadissAction())
        .switchMap(() =>
            this.hDataService.getHadiss()
                .map((hadiss: Hadis[]) => new hadisActions.FetchHadissSuccessAction(hadiss))
                .catch(error => of(new hadisActions.FetchHadissFailAction(error)))
        )

}