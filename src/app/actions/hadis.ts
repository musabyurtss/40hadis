import { Action } from '@ngrx/store';
import { Hadis } from '../models/hadis';

export const CREATE_HADIS = 'CREATE_HADIS';
export const REMOVE_HADIS = 'REMOVE_HADIS';

export const FETCH_HADISS = 'FETCH_HADISS';
export const FETCH_HADISS_SUCCES = 'FETCH_HADISS_SUCCES';
export const FETCH_HADISS_FAIL = 'FETCH_HADISS_FAIL';

// gets a list of hadis (init - success - fail)
export class FetchHadissAction implements Action {
  readonly type = FETCH_HADISS;
}

export class FetchHadissSuccessAction implements Action {
  readonly type = FETCH_HADISS_SUCCES;

  constructor(public payload: Hadis[]) { }
}

export class FetchHadissFailAction implements Action {
  readonly type = FETCH_HADISS_FAIL;

  constructor(public payload: any) { }
}

export type Actions = FetchHadissAction | FetchHadissSuccessAction | FetchHadissFailAction;
