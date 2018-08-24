import {ADD_AUTH_TOKEN, REMOVE_AUTH_TOKEN} from '../constants/actionTypes';

export default (state = null, action) => {
    switch(action.type){
        case ADD_AUTH_TOKEN:
            return action.payload;
        case REMOVE_AUTH_TOKEN:
            return null;
        default:
            return state;
    }
}