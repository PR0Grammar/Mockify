import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import SelectSongReducer from './SelectSongReducer';


export default combineReducers({
    auth: AuthReducer,
    selectedSong: SelectSongReducer,
})