import { Action } from '@ngrx/store';
import { RouterAction, ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Hadis } from '../models/hadis';

export const HADIS_BY_ID = 'HADIS_BY_ID';
export const HADIS_BY_ID_SUCCESS = 'HADIS_BY_ID_SUCCESS';
export const HADIS_BY_ID_FAIL = 'HADIS_BY_ID_FAIL';

export class HadisByIdAction implements Action {
    readonly type = HADIS_BY_ID;

    constructor(public payload: number) { }
}

export class HadisByIdSuccessAction implements Action {
    readonly type = HADIS_BY_ID_SUCCESS;

    constructor(public payload: any) { }
}

export class HadisByIdFailAction implements Action {
    readonly type = HADIS_BY_ID_FAIL;

    constructor(public payload: any) { }
}

export type HadisItemActions = RouterAction<any> | HadisByIdAction | HadisByIdSuccessAction | HadisByIdFailAction;
