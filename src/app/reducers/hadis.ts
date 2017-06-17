import { ActionReducer, Action } from '@ngrx/store';

import {
  ADD_HADIS,
  REMOVE_HADIS
} from '../actions/hadis';

export const hadis = (state = [], action) => {
  switch (action.type) {
    case ADD_HADIS:
      return [
        ...state,
        Object.assign({}, { id: action.payload.id, baslik: action.payload.baslik, metin: action.payload.metin })
      ];
    case REMOVE_HADIS:
      return state;
  }
};

