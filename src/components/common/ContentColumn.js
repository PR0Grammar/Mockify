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
    id={item.id} 
    type={item.type} 
    caption={item.caption} 
    subCaption={item.desc} 
    imgUrl={item.imgUrl} 
*/

class ContentColumn extends Component  {
  constructor(props) {
    super(props);
  }

  async updateCurrentAlbumSongListView() {
    const albumInfo =  await getAlbumInfoById(this.props.authToken, this.props.id);
    
    this.props.changeAlbumListArtistId(albumInfo.artists[0].id);
    this.props.changeAlbumListAlbumId(albumInfo.id);
    this.props.changeAlbumListAlbumName(albumInfo.name);
    this.props.changeAlbumListArtistName(albumInfo.artists[0].name);
    this.props.changeAlbumListImgUrl(albumInfo.images[1].url)
    this.props.changeAlbumListTrackList(albumInfo.tracks.items.map(track => {
      return {
        trackName: track.name,
        artistNames: track.artists.map(artist=> artist.name),
        isExplicit: track.explicit,
      }
    }))

  }

  async updateCurrentArtistSongListView() {
    
  }

  async navigateTo() {
    if(isNil(this.props.id)) return;

    const {navigate} = this.props.navigation;

    switch(this.props.type){

      case 'artist': {
        return; //TODO
        break;
      }

      case 'album': {
        await this.updateCurrentAlbumSongListView();
        navigate('AlbumPage');
        break;
      }

      case 'playlist': {
        return; //TODO
        break;
      }

      default:
        return;
    }
  }

  render() {
    return(    
      <TouchableOpacity onPress={() => this.navigateTo()}>
        <View style={styles.container}>
          {this.props.type == 'artist' ? <CircleAlbumCard imgUrl={this.props.imgUrl} /> : <SquareAlbumCard imgUrl={this.props.imgUrl} />}
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
