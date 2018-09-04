import { CHANGE_CURRENT_TRACK_METADATA } from '../constants/actionTypes';

export const changeCurrentTrackMetadata = (trackMetadataObj) => {
    return {
        type: CHANGE_CURRENT_TRACK_METADATA,
        payload: trackMetadataObj
    }
}