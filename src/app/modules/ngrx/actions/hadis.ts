import { Action } from '@ngrx/store';
import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Hadis } from '../models/hadis';

export const CREATE_HADIS = 'CREATE_HADIS';
export const REMOVE_HADIS = 'REMOVE_HADIS';

export const FETCH_HADISS = 'FETCH_HADISS';
export const FETCH_HADISS_SUCCES = 'FETCH_HADISS_SUCCES';
export const FETCH_HADISS_FAIL = 'FETCH_HADISS_FAIL';
export const FETCH_HADISS_PAGE = 'FETCH_HADISS_PAGE';

interface p {
  skip: string,
  limit: string
}

// gets a list of hadis (init - success - fail)
export class FetchHadissAction implements Action {
  readonly type = FETCH_HADISS;
  constructor(public payload: p) { }
}

export class FetchHadissSuccessAction implements Action {
  readonly type = FETCH_HADISS_SUCCES;

  constructor(public payload: Hadis[]) { }
}

export class FetchHadissFailAction implements Action {
  readonly type = FETCH_HADISS_FAIL;

  constructor(public payload: any) { }
}

export class FetchHadissPageAction implements Action {
  readonly type = FETCH_HADISS_PAGE;

  constructor(public payload: any) { }
}


export type HadisActions = RouterAction<any>
  | FetchHadissAction
  | FetchHadissSuccessAction
  | FetchHadissFailAction
  | FetchHadissPageAction;
