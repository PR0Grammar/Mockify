import React, {Component} from 'react';
import { View } from 'react-native';
import { RowHeader, ContentScrollRow } from '../common';

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
      <View>
        <RowHeader
          header='Recommended Stations'
          subHeader='Non-stop music based on your favorite songs and artists.'
        />
        <ContentScrollRow/>
      </View>
    );
  }

}

export default RecommendedStations;