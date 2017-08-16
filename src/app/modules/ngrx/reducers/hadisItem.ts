
import { ActionReducer, Action } from '@ngrx/store';

import * as hadisItemAction from '../actions/hadisItem';
import { Hadis } from '../models/hadis';

export interface State {
    loading: boolean;
    loaded: boolean;
    selectedHadisItem: Hadis;
    navItems: { prev: Hadis, next: Hadis }
}


const initialState: State = {
    loading: false,
    loaded: false,
    selectedHadisItem: null,
    navItems: { prev: null, next: null }
}

export const HadisReducer = (state: State = initialState, action: hadisItemAction.HadisItemActions) => {
    switch (action.type) {
        case hadisItemAction.HADIS_BY_ID:
            return Object.assign({}, state, { loading: true });

        case hadisItemAction.HADIS_BY_ID_SUCCESS: {
            let hadisArray = action.payload;
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                selectedHadisItem: hadisArray[1],
                navItems: {
                    prev: hadisArray[0],
                    next: hadisArray[2]
                }
            });
        }

        case hadisItemAction.HADIS_BY_ID_FAIL:

        default:
            return state;
    }
};

// export const getHadiss = (state: State) => state.hadiss;
