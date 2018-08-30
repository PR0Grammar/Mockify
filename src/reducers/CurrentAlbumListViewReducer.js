import {CHANGE_ALBUM_LIST_ARTIST_ID,CHANGE_ALBUM_LIST_ALBUM_ID,CHANGE_ALBUM_LIST_ALBUM_NAME, CHANGE_ALBUM_LIST_ARTIST_NAME, CHANGE_ALBUM_LIST_TRACK_LIST} from '../constants/actionTypes';

const INIT_STATE = {
    artistId: '',
    albumId: '',
    albumName: '',
    albumArtistName: '',
    trackList: [
        {
            trackName: '',
            artistNames: ['', ''],
            isExplicit: false,
        }
    ]

}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case CHANGE_ALBUM_LIST_ARTIST_ID:
            return Object.assign({}, state, {
                artistId: action.payload
            });
        case CHANGE_ALBUM_LIST_ALBUM_ID: 
            return Object.assign({}, state, {
                albumId: action.payload
            });
        case CHANGE_ALBUM_LIST_ALBUM_NAME:
            return Object.assign({}, state, {
                albumName: action.payload
            });
        case CHANGE_ALBUM_LIST_ARTIST_NAME: 
            return Object.assign({}, state, {
                albumArtistName: action.payload
            });
        case CHANGE_ALBUM_LIST_TRACK_LIST: 
            return Object.assign({}, state, {
                trackList: actions.payload
            });
        default:
            return state;
    }
}