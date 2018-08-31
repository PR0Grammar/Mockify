import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation';
import {BackMenuHeader} from '../common';
import {AlbumInfoColumn} from '../AlbumSongList'
import configStyle from '../../../config/style'

class AlbumSongList extends Component {

    render() {
        return(
            <View style={{flex:1, backgroundColor: configStyle.BLACK}}>
                <BackMenuHeader 
                    backOnPress={() => this.props.navigation.goBack()}
                />
                <AlbumInfoColumn />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        albumName: state.albumSongList.albumName,
    }
}

export default withNavigation(connect(mapStateToProps)(AlbumSongList));