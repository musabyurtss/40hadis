import { ActionReducer, Action } from '@ngrx/store';

import * as hadisAction from '../actions/hadis';
import { Hadis } from '../models/hadis';

export const HadisReducer: ActionReducer<Hadis[]> = (state: Hadis[] = [], action: hadisAction.Actions) => {
  switch (action.type) {

    case hadisAction.CREATE_HADIS:
      return [...state, action.payload];

    case hadisAction.REMOVE_HADIS:
      return state.filter((mState) => {
        return mState.id !== action.payload.id;
      });

    default:
      return state;
  }
};

