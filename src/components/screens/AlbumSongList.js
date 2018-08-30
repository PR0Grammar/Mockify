import React from 'react';
import { View } from 'react-native';
import {BackMenuHeader} from '../common'
import configStyle from '../../../config/style'

const AlbumSongList = () => {
    return(
        <View style={{flex:1, backgroundColor: configStyle.BLACK}}>
            <BackMenuHeader/>
        </View>
    )
}

export default AlbumSongList;