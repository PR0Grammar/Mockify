import { CHANGE_CURRENT_TRACK_METADATA, ADD_CURRENT_TRACK_END_TIME } from '../constants/actionTypes';

const INIT_STATE = {
    trackId: '',
    trackTitle: '',
    trackArtist: '',
    trackAlbumTitle: '',
    trackStartTime: 0,
    trackEndTime: null,
}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case CHANGE_CURRENT_TRACK_METADATA:
            return {
                ...state,
                ...{
                    trackId: action.payload.trackId,
                    trackTitle: action.payload.trackTitle,
                    trackArtist: action.payload.trackArtist,
                    trackAlbumTitle: action.payload.trackAlbumTitle
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