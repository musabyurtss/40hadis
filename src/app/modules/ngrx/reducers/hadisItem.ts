
import { ActionReducer, Action } from '@ngrx/store';

import * as hadisItemAction from '../actions/hadisItem';
import { Hadis } from '../models/hadis';

export interface State {
    loading: boolean;
    loaded: boolean;
    selectedHadisItem: Hadis;
}


const initialState: State = {
    loading: false,
    loaded: false,
    selectedHadisItem: null
}

export const HadisReducer = (state: State = initialState, action: hadisItemAction.HadisItemActions) => {
    switch (action.type) {
        case hadisItemAction.HADIS_BY_ID:
            return Object.assign({}, state, { loading: true });

        case hadisItemAction.HADIS_BY_ID_SUCCESS: {
            const selectedHadis = action.payload;
            return Object.assign({}, state, { loading: false, loaded: true, selectedHadisItem: selectedHadis });
        }

        case hadisItemAction.HADIS_BY_ID_FAIL:

        default:
            return state;
    }
};

// export const getHadiss = (state: State) => state.hadiss;
