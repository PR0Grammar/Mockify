import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/Track.component.style';
import configStyle from '../../../config/style'
import DotMenu from './DotMenu';

class Track extends Component {
    render() {
        return(
            <View style={styles.mainContainer}>
                <TouchableOpacity>
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

export default Track;