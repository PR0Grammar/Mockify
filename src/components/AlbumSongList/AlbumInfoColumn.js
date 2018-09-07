import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {SquareAlbumCard, HamburgerButton} from '../common';
import { connect } from 'react-redux';
import styles from '../styles/AlbumInfoColumn.component.style';

class AlbumInfoColumn extends Component {
    render(){
        return(
            <View style={styles.container}>
                <SquareAlbumCard imgUrl={this.props.imgUrl}/>
                <Text style={styles.albumNameText}>{this.props.albumName}</Text>
                <Text style={styles.artistNameText}>{`ALBUM BY ${this.props.artistName.toUpperCase()}`}</Text>
                <View style={styles.buttonContainer}>
                    <HamburgerButton medium text={'SHUFFLE PLAY'} textSize={18}/>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const {albumImgUrl, albumArtistName, albumName} = state.albumSongList;
    return{
        artistName: albumArtistName,
        albumName: albumName,
        imgUrl: albumImgUrl
    }
}

export default connect(mapStateToProps)(AlbumInfoColumn);