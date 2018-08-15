import React, {Component} from 'react';
import { View } from 'react-native';
import { RowHeader, ContentScrollRow } from '../common';

class MadeForUser extends Component {
  constructor(props){
    super(props);

    this.state = {
      personalPlayList: []
    }
  }

  render() {
    const userFirstName = 'Bob';

    return(
      <View>
        <RowHeader
          header={`Made for ${userFirstName}`}
          subHeader='Get better recommendations the more you listen.'
        />
        <ContentScrollRow/>
      </View>
    );

  }
}

export default MadeForUser;