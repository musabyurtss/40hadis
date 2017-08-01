
import { ActionReducer, Action } from '@ngrx/store';

import * as hadisAction from '../actions/hadis';
import { Hadis } from '../models/hadis';

export interface State {
  loading: boolean;
  loaded: boolean;
  hadiss: Hadis[];
}


const initialState: State = {
  loading: false,
  loaded: false,
  hadiss: []
}

export const HadisReducer = (state: State = initialState, action: hadisAction.HadisActions) => {
  switch (action.type) {
    case hadisAction.FETCH_HADISS:
      return Object.assign({}, state, { loading: true });

    case hadisAction.FETCH_HADISS_SUCCES: {
      const hadissPreviews = action.payload;
      return Object.assign({}, state, { loading: false, loaded: true, hadiss: hadissPreviews });
    }

    case hadisAction.FETCH_HADISS_FAIL:

    default:
      return state;
  }
};

// export const getHadiss = (state: State) => state.hadiss;
