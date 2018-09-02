import React, { Component } from 'react';
import { connect } from 'react-redux';
import {TrackList} from '../common';

class AlbumTrackList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <TrackList
                tracks={this.props.tracks.map(track => {
                    return {
                        trackName: track.trackName,
                        isExplicit: track.isExplicit,
                        caption: track.artistNames.join(', '),
                    }
                })}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.albumSongList.trackList
    }
}

export default connect(mapStateToProps)(AlbumTrackList);
