  
import { ActionReducer, Action } from '@ngrx/store';

import * as hadisAction from '../actions/hadis';
import { Hadis } from '../models/hadis';

export interface State {
  loading: boolean;
  loaded: boolean;
  hadiss: Hadis[];
  pageItems: Hadis[];
  currentPage: number;
}


const initialState: State = {
  loading: false,
  loaded: false,
  hadiss: [],
  pageItems: [],
  currentPage: 0
}

export const HadisReducer = (state: State = initialState, action: hadisAction.HadisActions) => {
  switch (action.type) {
    case hadisAction.FETCH_HADISS: {
      return Object.assign({}, state, { loading: true });
    }
    case hadisAction.FETCH_HADISS_SUCCES: {
      var hadissPreviews = [];
      hadissPreviews = state.hadiss.concat(action.payload);

      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        hadiss: hadissPreviews,
        pageItems: action.payload
      });
    }

    // case hadisAction.FETCH_HADISS_FAIL:
    case hadisAction.FETCH_HADISS_PAGE: {
      const hadissList = state.hadiss;
      this.hadissList = state.hadiss.push(action.payload);
    }

    default:
      return state;
  }
};

// export const getHadiss = (state: State) => state.hadiss;
