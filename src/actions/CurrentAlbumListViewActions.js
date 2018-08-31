import {CHANGE_ALBUM_LIST_ALBUM_IMG_URL, CHANGE_ALBUM_LIST_ARTIST_ID,CHANGE_ALBUM_LIST_ALBUM_ID,CHANGE_ALBUM_LIST_ALBUM_NAME, CHANGE_ALBUM_LIST_ARTIST_NAME, CHANGE_ALBUM_LIST_TRACK_LIST} from '../constants/actionTypes';

export const changeAlbumListArtistId = (artistId) => {
    return {
        type: CHANGE_ALBUM_LIST_ARTIST_ID,
        payload: artistId,
    }
}

export const changeAlbumListAlbumId = (albumId) => {
    return {
        type: CHANGE_ALBUM_LIST_ALBUM_ID,
        payload: albumId,
    }
}

export const changeAlbumListAlbumName = (albumName) => {
    return {
        type: CHANGE_ALBUM_LIST_ALBUM_NAME,
        payload: albumName,
    }
}

export const changeAlbumListArtistName = (artistName) => {
    return {
        type: CHANGE_ALBUM_LIST_ARTIST_NAME,
        payload: artistName,
    }
}

export const changeAlbumListTrackList = (trackList) => {
    return {
        type: CHANGE_ALBUM_LIST_TRACK_LIST,
        payload: trackList,
    }
}

export const changeAlbumListImgUrl = (albumImgUrl) => {
    return {
        type: CHANGE_ALBUM_LIST_ALBUM_IMG_URL,
        payload: albumImgUrl,
    }
}