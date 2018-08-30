import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import SelectSongReducer from './SelectSongReducer';
import CurrentAlbumListViewReducer from './CurrentAlbumListViewReducer';


export default combineReducers({
    auth: AuthReducer,
    selectedSong: SelectSongReducer,
    albumSongList: CurrentAlbumListViewReducer,
})