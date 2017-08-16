
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';

import * as hadisActions from '../actions/hadis';
import * as hadisItemActions from '../actions/hadisItem';
import { HadisDataService } from '../services/hadis.data.service';
import { Hadis } from './../models/hadis';

@Injectable()
export class HadisEffects {

    @Effect()
    navigateToHadisList = this.navTo('hadisler', (r: ActivatedRouteSnapshot, s: any) => {
        console.log(r);
        console.log(s.hadis.hadiss.length);

        if (s.hadis.hadiss.length === 0)
            return this.hDataService.getHadiss('0', '7')
                .map((hadiss: Hadis[]) => new hadisActions.FetchHadissSuccessAction(hadiss))
                .catch(error => of(new hadisActions.FetchHadissFailAction(error)))
        else {
            return this.$actions
                .ofType(hadisActions.FETCH_HADISS_SUCCES)
                .map(s => {
                    console.log(s);
                    return s;

                })
        }
        // return Observable.of(new hadisActions.FetchHadissSuccessAction(s.hadis.hadiss))
    })

    @Effect()
    navigateToHadis = this.navTo('hadis/:id', (r: ActivatedRouteSnapshot, s: any) => {
        console.log(r);
        const id = +r.paramMap.get('id');
        return this.hDataService.getHadisById(id - 1)
            .merge(this.hDataService.getHadisById(id),
            this.hDataService.getHadisById(id + 1))
            .toArray()
            .map(hadisItem => {
                hadisItem = hadisItem.sort((a, b) => { return (a.id - b.id) })
                return new hadisItemActions.HadisByIdSuccessAction(hadisItem)
            })
            .catch(error => of(new hadisItemActions.HadisByIdFailAction(error)))
    })

    // FETCH_HADISS action dispatch edildiginde tetiklenir.
    // @Effect()
    // getHadisList: Observable<Action> = this.$actions
    //     .ofType(hadisActions.FETCH_HADISS)
    //     // .startWith(new hadisActions.FetchHadissAction())
    //     .switchMap((action) => {
    //         return this.hDataService.getHadiss(action.payload.skip, action.payload.limit)
    //             .map((hadiss: Hadis[]) => new hadisActions.FetchHadissSuccessAction(hadiss))
    //             .catch(error => of(new hadisActions.FetchHadissFailAction(error)))
    //     })

    // HADIS_BY_ID action dispatch edildiginde tetiklenir.
    // @Effect()
    // getHadisById: Observable<Action> = this.$actions
    //     .ofType(hadisItemActions.HADIS_BY_ID)
    //     .switchMap((action) => {
    //         return this.hDataService.getHadisById(action.payload - 1)
    //             .merge(this.hDataService.getHadisById(action.payload),
    //             this.hDataService.getHadisById(action.payload + 1))
    //             .toArray()
    //             .map(hadisItem => {
    //                 hadisItem = hadisItem.sort((a, b) => { return (a.id - b.id) })
    //                 return new hadisItemActions.HadisByIdSuccessAction(hadisItem)
    //             })
    //             .catch(error => of(new hadisItemActions.HadisByIdFailAction(error)))
    //     })

    constructor(
        private $actions: Actions,
        private store: Store<any>,
        private hDataService: HadisDataService) { }

    private navTo(path: string, done: (a: ActivatedRouteSnapshot, state: any) => Observable<any>) {

        const navigation = this.$actions
            .ofType(ROUTER_NAVIGATION)
            .map((r: RouterNavigationAction) => r.payload.routerState.root.firstChild)
            .filter(s => s.routeConfig.path === path)

        return navigation.withLatestFrom(this.store)
            .switchMap(a => done(a[0], a[1]))

    }

}