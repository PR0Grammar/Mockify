import { ADD_AUTH_TOKEN, REMOVE_AUTH_TOKEN } from '../constants/actionTypes';

export const addAuthToken = (token) => {
    return {
        type: ADD_AUTH_TOKEN,
        payload: token
    };
}

export const removeAuthToken = () => {
    return {
        type: REMOVE_AUTH_TOKEN,
        payload: ''
    }
}