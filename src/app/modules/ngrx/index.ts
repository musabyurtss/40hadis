export * from './actions';
export * from './effects';
export * from './models';
export * from './services';

import { Injectable } from "@angular/core";
import { Params, ActivatedRouteSnapshot } from "@angular/router";
import { Store, combineReducers } from "@ngrx/store";
import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Actions, Effect } from '@ngrx/effects';

import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/withLatestFrom';

import { HadisDataService } from './services/hadis.data.service';

// state
export type Hadis = {
    id: string;
    hadisInfo: {
        order: number,
        title: string,
        author: string
        text: string,
        seen: boolean
    };
};


export type Filters = { pagination: { pageSize: number, currentPage: number, totalItem: number } };
export type AppState = { hadisler: { [id: number]: Hadis }, list: number[], filters: Filters };
export type State = { hadisApp: AppState };

export const initialState: State = {
    hadisApp: {
        filters: { pagination: { pageSize: 5, currentPage: 1, totalItem: 0 } },
        hadisler: {},
        list: []
    }
}

// actions
export type HadisListUpdated = { type: 'HADIS_LIST_UPDATED', payload: { hadisler: { [id: number]: Hadis }, list: number[], filters: Filters } }
type Action = RouterAction<State> | HadisListUpdated;

// reducer
export function hadisAppReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'HADIS_LIST_UPDATED': {
            return { ...state, ...action.payload }
        }
        default:
            return state;
    }
}


@Injectable()
export class HadisEffects {
    @Effect() navToHadisList = this.handleNavigation('hadisler', (r: ActivatedRouteSnapshot) => {
        const filters = createFilters(r.params);
        return this.hadisService.getHadisByFilters(filters)
            .map(res => ({ type: 'HADIS_LIST_UPDATED', payload: { ...res, filters } }))
    })



    constructor(
        private actions: Actions,
        private store: Store<State>,
        private hadisService: HadisDataService
    ) { }

    private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: State) => Observable<any>) {
        const nav = this.actions.ofType(ROUTER_NAVIGATION).
            map(firstSegment).
            filter(s => s.routeConfig.path === segment);

        return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
            console.log('Network error', e);
            return of();
        });
    }
}

function firstSegment(r: RouterNavigationAction) {
    return r.payload.routerState.root.firstChild;
}


function createFilters(p: Params): Filters {
    return { pagination: { pageSize: +p['pageSize'] || 5, currentPage: +p['currentPage'] || 1, totalItem: +p['totalItem'] } };
}