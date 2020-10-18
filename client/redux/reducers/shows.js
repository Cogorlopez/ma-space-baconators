import {SET_SHOWS, SET_CURRENT_SHOW} from '../actions/types'

const initialState = {
    items: [],
    currentShow: { 
        sets: []
    }
};

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case SET_SHOWS:
            return {...state, shows: payload};
        case SET_CURRENT_SHOW:
            return{...state, currentShow: payload}
        
        default:
            return state

    }
}