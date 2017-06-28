import { Hadis } from './../models/hadis';
import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromHadis from './hadis';


export interface State {
    hadis: fromHadis.State
}


const reducers = {
    hadis: fromHadis.HadisReducer,
}


const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}


// helper funcs

// Hadis
export const getHadisListState = (state: State) => state.hadis;

export const getHadisList = createSelector(getHadisListState, (state) => (state.hadiss));
