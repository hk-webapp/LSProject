import PageIntroInfo from 'src/Entities/PageIntroInfo';
import { CONTACT_US_CHANGE_DESC, CONTACT_US_CHANGE_EMAIL, CONTACT_US_CHANGE_NAME, 
    FETCH_INTROPAGES_FAIL, FETCH_INTROPAGES_SUCCESS,
     SITE_IS_OFFLINE, SITE_IS_ONLINE } 
     from './actionConstant';

export interface ILoadSuccessIntroPagesAction {
    type: typeof FETCH_INTROPAGES_SUCCESS,
    items: PageIntroInfo[],
    loaded: boolean
}

export interface ILoadFailIntroPagesAction {
    type: typeof FETCH_INTROPAGES_FAIL,
    loaded: boolean,
    error: string
}

export type IntroPagesActionTypes = ILoadSuccessIntroPagesAction | ILoadFailIntroPagesAction;

export interface IAppIsOfflineAction {
    type: typeof SITE_IS_OFFLINE,
    AppIsOffline: boolean,
}

export interface IAppIsOnlineAction {
    type: typeof SITE_IS_ONLINE,
    AppIsOffline: boolean,
}

export type AppActionTypes = IAppIsOfflineAction | IAppIsOnlineAction;

export interface IContactUsChangeNameAction {
    type: typeof CONTACT_US_CHANGE_NAME
    Name: string
}

export interface IContactUsChangeEmailAction {
    type: typeof CONTACT_US_CHANGE_EMAIL
    Email: string
}

export interface IContactUsChangeDescAction {
    type: typeof CONTACT_US_CHANGE_DESC
    Desc: string
}


export type ContactUsActionType = IContactUsChangeNameAction | IContactUsChangeEmailAction | IContactUsChangeDescAction;