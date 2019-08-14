import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk'
import { AppReducer } from 'src/reducers/appReducer';
import { ContactUsProducer } from 'src/reducers/ContacUsReducer';
import IntroPagesReducer from '../reducers/IntroPagesReducer'
import { IAppMainState, IContacUsState, IIntroPagesState } from './AllStates';

export interface IAppState {
    appMainState: IAppMainState,
    introPageState: IIntroPagesState,
    contactusState: IContacUsState,
}

const rootReaducer = combineReducers<IAppState>({
    appMainState: AppReducer,
    contactusState: ContactUsProducer,
    introPageState: IntroPagesReducer,
});

export function configStore(): Store<IAppState, any> {
    const store = createStore(rootReaducer, applyMiddleware(thunk));
    return store;
}

export const appStore = configStore();