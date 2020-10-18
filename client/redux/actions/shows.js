import {SET_SHOWS, SET_CURRENT_SHOW} from './types';

export const setShow = (shows) => dispatch => {
    dispatch({
        type: SET_SHOWS,
        payload: { shows }
    });
}

export const setCurrentShow = (show) => dispatch => {
    dispatch({
        type: SET_CURRENT_SHOW,
        payload: show
    })
}