import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ContentRow } from '../common';
import { getUserRecentlyPlayed, getArtistInfoById } from '../../../data';
import { followers, removeRepeatedObjs } from '../../../helper'
import { withNavigation } from 'react-navigation';


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
    let index = 0;          

    const recentlyPlayedContent = await getUserRecentlyPlayed(this.props.authToken).then(content => removeRepeatedObjs(content.items, 'context.uri', 20))

    for(item of recentlyPlayedContent){

      let recentlyPlayed = {
          index: undefined,
          type: undefined,
          id: undefined,
          title: undefined,
          desc: undefined,
          imgUrl: undefined,
      }

      if(item.context != null && item.context.type == 'artist') {
        let artistInfo = await getArtistInfoById(this.props.authToken, item.track.artists[0].id);

        recentlyPlayed.index = index++;
        recentlyPlayed.type = 'artist'
        recentlyPlayed.id = item.track.artists[0].id;
        recentlyPlayed.title = item.track.artists[0].name;
        recentlyPlayed.desc = followers(artistInfo.followers.total);
        recentlyPlayed.imgUrl = artistInfo.images[1].url

      }

      else {
        recentlyPlayed.index = index++;
        recentlyPlayed.type = 'album'
        recentlyPlayed.id = item.track.album.id;
        recentlyPlayed.title = item.track.album.name;
        recentlyPlayed.desc = ''
        recentlyPlayed.imgUrl = item.track.album.images[1].url;
      }


      mostRecentPlayed.push(recentlyPlayed)
      
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
  
  export default withNavigation(connect(mapStateToProps)(RecentlyPlayed));