// import axios from 'axios'
import { ActionCreator, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import PagesApi from 'src/apis/PagesApi';
import PageIntroInfo from 'src/Entities/PageIntroInfo';
import { IIntroPagesState } from 'src/Store/AllStates';
import { FETCH_COURSES_SUCCESS, FETCH_INTROPAGES_FAIL, FETCH_INTROPAGES_SUCCESS } from './actionConstant';
import { IntroPagesActionTypes } from './actionTypes';

const pagesApi = new PagesApi();

export const FetchCourses: ActionCreator<
    ThunkAction<Promise<any>, IIntroPagesState, null, IntroPagesActionTypes>> = () => {

        return async (dispatch: Dispatch) => {
            const response = await pagesApi.GetCourses();
            dispatch({
                courses: response || [],
                loaded: true,
                type: FETCH_COURSES_SUCCESS,
            })
        }
    }

export const FetchIntroPagesByApi: ActionCreator<
    ThunkAction<Promise<any>, IIntroPagesState, null, IntroPagesActionTypes>> = () => {

        return async (dispatch: Dispatch) => {
            pagesApi.GetIntroInfoList()
                .then((data: PageIntroInfo[]) => {
                    dispatch({
                        items: data || [],
                        loaded: true,
                        type: FETCH_INTROPAGES_SUCCESS,
                    });
                })
                .catch(err => {
                    dispatch({
                        error: err,
                        loaded: false,
                        type: FETCH_INTROPAGES_FAIL
                    })
                });
        }
    }