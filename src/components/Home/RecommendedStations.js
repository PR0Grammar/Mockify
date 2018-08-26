import React, {Component} from 'react';
import { ContentRow } from '../common';

class RecommendedStations extends Component {
  constructor(props){
    super(props);

    this.state = {
      mostPlayedArtist: [],
      mostPlayedAlbums: [],
    }
  }

  render() {
    return(
      <ContentRow
        header='Recommended Stations'
        subHeader='Non-stop music based on your favorite songs and artists.'
      />
    );
  }

}

export default RecommendedStations;