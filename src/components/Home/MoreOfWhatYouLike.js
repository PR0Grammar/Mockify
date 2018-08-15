import React, {Component} from 'react';
import { View } from 'react-native';
import { RowHeader, ContentScrollRow } from '../common';

class MoreOfWhatYouLike extends Component {
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
          header='More of what you like'
          subHeader='Hear a little bit of everything you love'
        />
        <ContentScrollRow/>
      </View>
    );
  }

}

export default MoreOfWhatYouLike;