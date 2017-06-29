import { Hadis } from './../models/hadis';
import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromHadis from './hadis';
import * as fromHadisItem from './hadisItem';


export interface State {
    hadis: fromHadis.State,
    hadisItem: fromHadisItem.State
}

// Olusturulan tum reducer lar
const reducers = {
    hadis: fromHadis.HadisReducer,
    hadisItem: fromHadisItem.HadisReducer
}

// Bu app a tum reducer lari tek ruducer haline getitir.
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}


// helper funcs

// Hadis
export const getHadisListState = (state: State) => state.hadis;
// export const getHadisListState = (state: State) => state.hadis;

// App in herhang i bir yerinde state in herhangi bir halini istedigimiz formatta
// kullanmak icin store.selector ler

// Hadis
export const getHadisList = createSelector(getHadisListState, (state) => (state.hadiss));
export const getHadisListLoading = createSelector(getHadisListState, (state) => (state.loading));


// HadisItem
export const getHadisItemState = (state: State) => state.hadisItem;

export const getSelectedHadisItem = createSelector(getHadisItemState, (state) => (state.selectedHadisItem));
export const getSelectedHadisLoading = createSelector(getHadisItemState, (state) => (state.loading));


