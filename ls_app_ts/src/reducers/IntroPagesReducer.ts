import { IntroPagesActionTypes } from 'src/actions/actionTypes';
import { IIntroPagesState } from 'src/Store/AllStates';
import { FETCH_COURSES_SUCCESS, FETCH_INTROPAGES_FAIL, FETCH_INTROPAGES_SUCCESS } from '../actions/actionConstant';


const initState: IIntroPagesState = {
    courses: [],
    error: "",
    items: [],
    loaded: false,
}

export default function IntroPagesRoducer(state = initState, action: IntroPagesActionTypes) {
    switch (action.type) {
        case FETCH_INTROPAGES_SUCCESS:
            return {
                ...state,
                error: "",
                items: action.items,
                loaded: action.loaded,
            }

        case FETCH_COURSES_SUCCESS:
            return {
                ...state,
                courses: action.courses,
                error: "",
                loaded: action.loaded,
            }
        case FETCH_INTROPAGES_FAIL:
            return {
                ...state,
                items: [],
                loaded: action.loaded,
                // tslint:disable-next-line: object-literal-sort-keys
                error: action.error
            }
        default:
            return state;
    }
}

export const getIntroPages = (state: IIntroPagesState) => state.items;
export const getCourses = (state: IIntroPagesState) => state.courses;
export const getError = (state: IIntroPagesState) => state.error;
export const getLoaded = (state: IIntroPagesState) => state.loaded;
