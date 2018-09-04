import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/TrackList.component.style';
import Track from './Track';

/**
 * Props:
 *  @prop tracks: Array of objects that contain track metadata:
 *          @prop trackName: ''
 *          @prop isExplicit: bool
 *          @prop caption: ''
 */

class TrackList extends Component {
    render() {
        return(
            <View style={styles.container}>
                {this.props.tracks.map(track => <Track key={track.trackName} url={track.url} title={track.trackName} isExplicit={track.isExplicit} caption={track.caption} />)}
            </View>
        )
    }
 }

 export default TrackList;