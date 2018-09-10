import React, {Component} from 'react';
import { connect } from 'react-redux';
import { sample, isNil } from 'lodash';
import { ContentRow } from '../common';
import { getUserTopArtists, getRelatedArtists } from '../../../data'
import { followers } from '../../../helper';

class MoreLike extends Component {
  constructor(props){
    super(props);

    this.state = {
      chosenArtistName: '',
      relatedArtists: [],
    }
  }

  componentDidMount() {
      return this.getOneUserTopArtist()
      .then(chosenArtist => {
        this.setState({chosenArtistName: chosenArtist.name});
        return this.getRelatedArtistsInfo(chosenArtist.id);
      })
      .then(relatedArtists => {
        this.setState(prevState => {
          return {
            relatedArtists: [... prevState.relatedArtists, ... relatedArtists]
          }
        }
        );
      })
      .catch(e => console.log(e))
  }

  async getOneUserTopArtist() {
    return getUserTopArtists(this.props.authToken)
        .then(artists => {
          return Promise.resolve(sample(artists.items));
        });
  }

  async getRelatedArtistsInfo(artistId) {

    if(isNil(artistId)) {
      return Promise.reject(new Error(`Artist ID is not valid: ${artistId}`));
    }

    return getRelatedArtists(this.props.authToken, artistId)
      .then(artistsObj => {
        let relatedArtist = []
        
        for(artist of artistsObj.artists) {
          let artistInfo = {}

          artistInfo.index = artist.id;
          artistInfo.type = 'artist';
          artistInfo.id = artist.id;
          artistInfo.title = artist.name;
          artistInfo.desc = followers(artist.followers.total);
          artistInfo.imgUrl = artist.images[1].url;

          relatedArtist.push(artistInfo);

        };
        return Promise.resolve(relatedArtist);
      });
  }

  render() {
    return(
      <ContentRow
        header={`More like ${this.state.chosenArtistName}`}
        content={this.state.relatedArtists}
      />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    authToken: state.auth
  }
}

export default connect(mapStateToProps)(MoreLike);