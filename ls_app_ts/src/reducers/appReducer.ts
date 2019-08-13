import { SITE_IS_OFFLINE, SITE_IS_ONLINE } from 'src/actions/actionConstant';
import { AppActionTypes } from 'src/actions/actionTypes';
import { IAppMainState } from 'src/Store/AllStates';

const initState: IAppMainState = {
    isOffline: false,
};

export function AppReducer(state: IAppMainState = initState, action: AppActionTypes) {
    switch (action.type) {
        case SITE_IS_ONLINE:
            return {
                ...state,
                isOffline: false,
            }
        case SITE_IS_OFFLINE:
            return {
                ...state,
                isOffline: true,
            }
        default:
            return state;
    }
}