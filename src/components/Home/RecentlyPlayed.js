import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { RowHeader, ContentScrollRow } from '../common';
import { getUserRecentlyPlayed } from '../../../data';

class RecentlyPlayed extends Component {
  constructor(props){
    super(props);

    this.state = {
      mostRecentPlayed: [],
    }
  }

  componentDidMount() {
    getUserRecentlyPlayed(this.props.authToken)
    .then((userRecentlyPlayed) => {
        let mostRecentPlayed = [];          
        userRecentlyPlayed.items.forEach((item, index) => {
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

            recentlyPlayed.isArtist = item.context === null ? true : false;
            recentlyPlayed.artistId = item.track.artists[0].id;
            recentlyPlayed.albumId = item.track.album.id;
            recentlyPlayed.trackId = item.track.id;
            recentlyPlayed.artistName = item.track.artists.map(artist => artist.name).join();
            recentlyPlayed.albumName = item.track.album.name;
            recentlyPlayed.artistImgUrl = item.track.album.images[1].url + '.jpeg';

            mostRecentPlayed.push(recentlyPlayed)
        });
        this.setState((prevState) => {
            return {
                mostRecentPlayed: [...prevState.mostRecentPlayed, ...mostRecentPlayed]
            }
        })
    });
  }

  render() {
    return(
      <View>
        <RowHeader
          header='Recently Played'
        />
        <ContentScrollRow
            content={this.state.mostRecentPlayed}
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
  
  export default connect(mapStateToProps)(RecentlyPlayed);