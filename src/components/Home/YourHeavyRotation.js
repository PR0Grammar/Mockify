import React, {Component} from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux'
import { RowHeader, ContentScrollRow } from '../common';
import {getUserTopArtists, getUserTopTracks} from '../../../data';
import {followers} from '../../../helper'

class YourHeavyRotation extends Component {
  constructor(props){
    super(props);

    this.state = {
      mostPlayedArtist: [],
      mostPlayedAlbums: [],
    }
  }

  componentDidMount() {
    this.getUserTopPicks();
  }

  async getUserTopPicks() {
    let userArtists = [];
    let userAlbums = [];

    return axios.all([getUserTopArtists(this.props.authToken), getUserTopTracks(this.props.authToken)])
    .then(axios.spread((userTopArtists, userTopTracks) => {
      userTopArtists.items.forEach((artist, index) => {
        let userTopArtist = {}

        userTopArtist.index = index;
        userTopArtist.isArtist = true;
        userTopArtist.artistId = artist.id;
        userTopArtist.artistName = artist.name;
        userTopArtist.artistImgUrl = artist.images[1].url
        userTopArtist.artistDesc = followers(artist.followers.total)

        userArtists.push(userTopArtist)

      });

      userTopTracks.items.forEach((track, index) => {
        let userTopAlbum = {}

        userTopAlbum.index = index + 5;
        userTopAlbum.isArtist = false;
        userTopAlbum.albumId = track.album.id;
        userTopAlbum.albumName = track.album.name;
        userTopAlbum.albumImgUrl = track.album.images[1].url;
        userTopAlbum.albumDesc = track.artists.map(artist => artist.name).join(', ');

        userAlbums.push(userTopAlbum);

      });

    }))
    .then(() => {
      this.setState(prevState => {
        return {
          mostPlayedArtist: [...prevState.mostPlayedArtist, ...userArtists],
          mostPlayedAlbums: [...prevState.mostPlayedAlbums, ...userAlbums ]
        }
      })
    });
  }

  render() {
    return(
      <View>
        <RowHeader
          header='Your Heavy Rotation'
        />
        <ContentScrollRow
          content={[...this.state.mostPlayedAlbums, ...this.state.mostPlayedArtist]}
        />
      </View>
    );
  }

}
const mapStateToProps = (state) =>{
  return {
    authToken: state.auth,
  }
}

export default connect(mapStateToProps)(YourHeavyRotation);