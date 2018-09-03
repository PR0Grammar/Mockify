import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {shuffle} from 'lodash';
import { ContentRow } from '../common';
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

        userTopArtist.index = artist.id;
        userTopArtist.type = 'artist';
        userTopArtist.id = artist.id;
        userTopArtist.title = artist.name;
        userTopArtist.imgUrl = artist.images[1].url
        userTopArtist.desc = followers(artist.followers.total)

        userArtists.push(userTopArtist)

      });

      userTopTracks.items.forEach((track, index) => {
        let userTopAlbum = {}

        userTopAlbum.index = track.album.id;
        userTopAlbum.type= 'album';
        userTopAlbum.id = track.album.id;
        userTopAlbum.title = track.album.name;
        userTopAlbum.imgUrl = track.album.images[1].url;
        userTopAlbum.desc = track.artists.map(artist => artist.name).join(', ');

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

      <ContentRow
        header='Your Heavy Rotation'
        content={shuffle([...this.state.mostPlayedAlbums, ...this.state.mostPlayedArtist])}
      />
    );
  }

}
const mapStateToProps = (state) =>{
  return {
    authToken: state.auth,
  }
}

export default connect(mapStateToProps)(YourHeavyRotation);