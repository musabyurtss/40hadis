import { Action } from '@ngrx/store';
import { Hadis } from '../models/hadis';

export const CREATE_HADIS = 'CREATE_HADIS';
export const REMOVE_HADIS = 'REMOVE_HADIS';

export class CreateHadisAction implements Action {
  readonly type = CREATE_HADIS;

  constructor(public payload: Hadis) { }
}

export class RemoveHadisAction implements Action {
  readonly type = REMOVE_HADIS;

  constructor(public payload: Hadis) { }
}


export type Actions = CreateHadisAction | RemoveHadisAction;
