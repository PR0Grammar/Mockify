import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ContentRow } from '../common';
import { getUserRecentlyPlayed, getArtistInfo } from '../../../data';
import { followers } from '../../../helper'

class RecentlyPlayed extends Component {
  constructor(props){
    super(props);

    this.state = {
      mostRecentPlayed: [],
    }
  }

  componentDidMount() {
    this.getUserRecentlyPlayedContent()
    .then(content => {
      this.setState((prevState) => {
        return {
          mostRecentPlayed: [...prevState.mostRecentPlayed, ...content]
        }
      });
    });
  }

  async getUserRecentlyPlayedContent() {
    let mostRecentPlayed = [];          

    const recentlyPlayedContent = await getUserRecentlyPlayed(this.props.authToken)

    recentlyPlayedContent.items.forEach((item, index) => {
            let recentlyPlayed = {
                index: index,
                isArtist: undefined,
                artistId: undefined,
                albumId: undefined,
                trackId: undefined,
                artistName: undefined,
                albumName: undefined,
                artistImgUrl: undefined,
                albumImgUrl: undefined,
            }

            recentlyPlayed.isArtist = item.context === null || item.context.type != 'album' ? true : false;
            recentlyPlayed.artistId = item.track.artists[0].id;
            recentlyPlayed.albumId = item.track.album.id;
            recentlyPlayed.trackId = item.track.id;
            recentlyPlayed.artistName = item.track.artists[0].name
            recentlyPlayed.albumName = item.track.album.name;
            recentlyPlayed.albumImgUrl = item.track.album.images[1].url;

            mostRecentPlayed.push(recentlyPlayed)
      });

      for(item of mostRecentPlayed ){
        const artistInfo = await getArtistInfo(this.props.authToken, item.artistId)
        item.artistDesc = followers(artistInfo.followers.total)
        item.artistImgUrl = artistInfo.images[1].url;
      }

      return mostRecentPlayed;

  }

  render() {
    return(
      <ContentRow
        header='Recently Played'
       content={this.state.mostRecentPlayed}

      />
    );
  }

}

const mapStateToProps = (state) =>{
    return {
      authToken: state.auth,
    }
  }
  
  export default connect(mapStateToProps)(RecentlyPlayed);