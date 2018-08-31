import React, { Component } from 'react';
import {View, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux';
import {isNil} from 'lodash'
import * as actions from '../../actions';
import { SquareAlbumCard } from './SquareAlbumCard';
import { CircleAlbumCard } from './CircleAlbumCard';
import ColumnCaption from './ColumnCaption';
import ColumnSubCaption from './ColumnSubCaption';
import styles from '../styles/ContentColumn.component.style';
import { getAlbumInfoById, getArtistInfoById } from '../../../data'

/*
  Returns the column with img, caption, and subCaption(usually follower #)

  Artist columns have circle imgs

  Props:
  artist - boolean if artist
  imgUrl - URL to image
  caption- Caption of Column
  subCaption - SubCaption of Column
*/

class ContentColumn extends Component  {
  constructor(props) {
    super(props);
  }

  async updateCurrentAlbumSongListView() {
    const albumInfo =  await getAlbumInfoById(this.props.authToken, this.props.albumId);

    this.props.changeAlbumListArtistId(albumInfo.artists[0].id);
    this.props.changeAlbumListAlbumId(albumInfo.id);
    this.props.changeAlbumListAlbumName(albumInfo.name);
    this.props.changeAlbumListArtistName(albumInfo.artists[0].name);
    this.props.changeAlbumListImgUrl(albumInfo.images[1].url)

  }

  async updateCurrentArtistSongListView() {
    
  }

  async navigateTo() {
    const artistIdExists = !isNil(this.props.albumIdExists);
    const albumIdExists = !isNil(this.props.albumId);

    await this.updateCurrentAlbumSongListView()

    return (this.props.artist == true && artistIdExists ) ? undefined : 
              albumIdExists  ? this.props.navigation.navigate('AlbumSongList') :
                undefined
  }

  render() {
    return(    
      <TouchableOpacity onPress={() => this.navigateTo()}>
        <View style={styles.container}>
          {this.props.artist == true ? <CircleAlbumCard imgUrl={this.props.imgUrl} /> : <SquareAlbumCard imgUrl={this.props.imgUrl} />}
          <ColumnCaption caption={this.props.caption} />
          <ColumnSubCaption subCaption={this.props.subCaption} />
        </View>
      </TouchableOpacity>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    authToken: state.auth,
  }
}

export default withNavigation(connect(mapStateToProps, actions)(ContentColumn));
