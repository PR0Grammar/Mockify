import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import {BackMenuHeader} from '../common';
import {AlbumInfoColumn, AlbumTrackList} from '../AlbumSongList'
import configStyle from '../../../config/style'

class AlbumPage extends Component {

    render() {
        return(
            <View style={{flex:1, backgroundColor: configStyle.BLACK}}>
                <BackMenuHeader 
                    backOnPress={() => this.props.navigation.goBack()}
                />
                <ScrollView>
                    <AlbumInfoColumn />
                    <AlbumTrackList />
                </ScrollView>
            </View>
        )
    }
}



export default withNavigation(AlbumPage);