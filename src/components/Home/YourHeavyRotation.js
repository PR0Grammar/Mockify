import React, {Component} from 'react';
import { View } from 'react-native';
import { RowHeader, ContentScrollRow } from '../common';

class YourHeavyRotation extends Component {
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
          header='Your Heavy Rotation'
        />
        <ContentScrollRow/>
      </View>
    );
  }

}

export default YourHeavyRotation;