export * from './actions';
export * from './effects';
export * from './models';
export * from './services';

import { Injectable } from "@angular/core";
import { Params, ActivatedRouteSnapshot } from "@angular/router";
import { Store, ActionReducer, combineReducers } from "@ngrx/store";
import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Actions, Effect } from '@ngrx/effects';
import { createSelector } from 'reselect';

import { of } from "rxjs/observable/of";
import { Observable } from "rxjs/Observable";
// import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/takeLast';

import { HadisDataService } from './services/hadis.data.service';
 
// state
export type Hadis = {
    id?: string,
    hadisInfo?: {
        order: number,
        title: string,
        author: string
        text?: string,
        seen: boolean
    };

};


export type Filters = { pagination: { pageSize: number, currentPage: number, totalItem: number } };
export type HadisState = { hadisler: { [id: number]: Hadis }, list: number[], filters: Filters, pending: boolean, hadis: Hadis, detailNavbar: Array<Hadis> };


export const initialState: HadisState = {
    // hadisApp: {
    filters: { pagination: { pageSize: 5, currentPage: 1, totalItem: 0 } },
    hadisler: {},
    list: [],
    pending: true,
    hadis: {},
    detailNavbar: []
    // }
}

// actions
export type HadisListLoaded = { type: 'HADIS_LIST_LOADED', payload: { hadisler: { [id: number]: Hadis }, list: number[], filters: Filters, pending: boolean } }
export type Load = { type: 'LOAD', payload: { pending: boolean } }
export type HadisDetailLoaded = { type: 'HADIS_DETAIL_LOADED', payload: { hadis: Hadis, detailNavbar: Array<Hadis>, pending: boolean } }

export type HadisListExtend = { type: 'HADIS_LIST_EXTEND', payload: { pending: boolean } }
export type HadisListExtended = { type: 'HADIS_LIST_EXTENDED', payload: { hadisler: { [id: number]: Hadis }, list: number[], filters: Filters, pending: boolean } }

type Action = RouterAction<HadisState> | Load | HadisListLoaded | HadisDetailLoaded | HadisListExtend | HadisListExtended;

// reducer
export function hadisAppReducer(state = initialState, action: Action): HadisState {
    switch (action.type) {
        case 'HADIS_LIST_LOADED': {
            return { ...state, ...action.payload }
        }
        case 'HADIS_DETAIL_LOADED': {
            return { ...state, ...action.payload }
        }
        case 'LOAD': {
            return { ...state, ...action.payload }
        }
        case 'HADIS_LIST_EXTEND': {
            state.pending = action.payload.pending
            return state;
        }
        case 'HADIS_LIST_EXTENDED': {

            const hadisler = Object.assign({}, state.hadisler, action.payload.hadisler);
            const list = state.list.concat(action.payload.list);
            const nstate = { hadisler, list, filters: action.payload.filters, pending: action.payload.pending }

            return { ...state, ...nstate }
        }
        default:
            return state;
    }
}

export const getHadisState = (state: State) => state.hadis

export const getHadisIds = createSelector(getHadisState, (state: HadisState) => state.list)
export const getHadisItems = createSelector(getHadisState, (state: HadisState) => state.hadisler)
export const getHadisCollection = createSelector(getHadisItems, getHadisIds, (hadisler, ids) => ids.map(id => hadisler[id]))


export const getHadisItem = createSelector(getHadisState, (state: HadisState) => state.hadis)
export const getPending = createSelector(getHadisState, (state: HadisState) => state.pending)
export const getDetail = createSelector(getHadisState, (state: HadisState) => {
    return { navbar: state.detailNavbar, hadis: state.hadis}
})

export const getPrev = createSelector(getHadisState, (state: HadisState) => state.detailNavbar[0] ? state.detailNavbar[0] : null)
export const getNext = createSelector(getHadisState, (state: HadisState) => state.detailNavbar[2] ? state.detailNavbar[2] : null)

import 'rxjs/add/observable/combineLatest';

// Effects

@Injectable()
export class HadisEffects {

    @Effect() navToHadisList = this.handleNavigation('hadisler', (r: ActivatedRouteSnapshot, state: State) => {
        this.store.dispatch({ type: 'LOAD', payload: { pending: true } })
        // Latest state refetch from the store when the browser backbutton is clicked.
        // if (state.hadis.list.length !== 0) {
        //     const hadisler = state.hadis.hadisler;
        //     const list = state.hadis.list;
        //     const filters = state.hadis.filters;
        //     return Observable.of({ type: 'HADIS_LIST_LOADED', payload: { hadisler, list, filters, pending: false } })

        // } else {
            // initialize for first loading.
            const filters = createFilters({ pageSize: r.data.pageSize, currentPage: r.data.currentPage });
            return this.hadisService.getHadisByFilters(filters)
                .map(res => {
                    const hadisler = res.hadisArr;
                    const list = res.list;
                    return { type: 'HADIS_LIST_LOADED', payload: { hadisler, list, filters, pending: false } }
                })
        // }

    })

    @Effect() navToHadisDetail = this.handleNavigation('hadis/:id', (r: ActivatedRouteSnapshot, state: State) => {
        this.store.dispatch({ type: 'LOAD', payload: { pending: true } })
        
        const id = +r.paramMap.get('id');

        const skip = ((id-2) >= 0) ? id-2 : 1 
        const navbar = this.hadisService.getHadiss((skip).toString(), "3").map((res) => res.list.map((id) => res.hadisArr[id])).toPromise();
        const detail = this.hadisService.getHadisById(id).map((hadis) => hadis).toPromise();
            
        return Observable.combineLatest(navbar, detail, (n, d)=> {
            return { type: 'HADIS_DETAIL_LOADED', payload: { hadis: d, detailNavbar: n, pending: false }}
        })
    })

    // Sayfalama icin
    @Effect() pagination = this.actions.ofType('HADIS_LIST_EXTEND')
        .switchMap((a) => {

            const filters = createFilters({ currentPage: a.payload.currentPage, pageSize: a.payload.pageSize });
            return this.hadisService.getHadisByFilters(filters)
                .map((res) => {
                    const hadisler = res.hadisArr;
                    const list = res.list;
                    return { type: 'HADIS_LIST_EXTENDED', payload: { hadisler, list, filters, pending: false } }
                })
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
            
        return nav.withLatestFrom(this.store).switchMap(a => (
            callback(a[0], a[1])
        )).catch(e => {
            console.log('Network error', e);
            return of();
        });
    }
}

function firstSegment(r: RouterNavigationAction) {
    return r.payload.routerState.root.firstChild;
}


function createFilters(p: Params): Filters {
    return { pagination: { pageSize: +p['pageSize'] || 5, currentPage: +p['currentPage'] || 1, totalItem: +p['totalItem'] || null } };
}


// States

export type State = {
    hadis: HadisState
};

// Olusturulan tum reducer lar
const reducers = {
    hadis: hadisAppReducer
}


import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
// Bu app a tum reducer lari tek ruducer haline getitir.
const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    environment.production = true;
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}