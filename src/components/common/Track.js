import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as actions from '../../actions';
import styles from '../styles/Track.component.style';
import configStyle from '../../../config/style'
import DotMenu from './DotMenu';

class Track extends Component {

    updateCurrentPlayingTrack() {
        this.props.changeCurrentTrackMetadata({
            trackTitle: this.props.track,
            trackArtist: '',
            trackAlbumTitle: '',
            trackUrl: this.props.trackUrl,
        });
    }

    render() {
        return(
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={() => this.updateCurrentPlayingTrack()}>
                    <View style={styles.trackInfoContainer}>
                        <Text style={styles.trackTitle}>{this.props.title}</Text>
                        <View style={styles.captionContainer}>
                            {this.props.isExplicit && <Icon style={styles.icon}name={'explicit'} color={configStyle.TEXT_GRAY} size={15} />}
                            <Text style={styles.trackCaption}>{this.props.caption}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <DotMenu color={configStyle.TEXT_GRAY}/>
            </View>
        )
    }
}

export default connect(null, actions)(Track);