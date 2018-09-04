import { CHANGE_CURRENT_TRACK_METADATA, ADD_CURRENT_TRACK_END_TIME } from '../constants/actionTypes';

const INIT_STATE = {
    trackTitle: '',
    trackArtist: '',
    trackAlbumTitle: '',
    trackUrl: '',
    trackStartTime: 0,
    trackEndTime: 30,
}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case CHANGE_CURRENT_TRACK_METADATA:
            return {
                ...state,
                ...{
                    trackTitle: action.payload.trackTitle,
                    trackArtist: action.payload.trackArtist,
                    trackAlbumTitle: action.payload.trackAlbumTitle,
                    trackUrl: action.payload.trackUrl,
                }
            }
        
        case ADD_CURRENT_TRACK_END_TIME:
            return {
                ...state,
                ...{
                    trackEndTime: action.payload
                }
            }

        default:
            return state;
    }
}