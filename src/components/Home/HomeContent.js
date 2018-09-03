import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import MadeForUser from './MadeForUser';
import MoreOfWhatYouLike from './MoreOfWhatYouLike';
import JumpBackIn from './JumpBackIn';
import YourHeavyRotation from './YourHeavyRotation';
import RecentlyPlayed from './RecentlyPlayed';

class HomeContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={{flex:1}}>
      <ScrollView>
        <MadeForUser />
        <RecentlyPlayed />
        <YourHeavyRotation />
        <MoreOfWhatYouLike />
        <JumpBackIn />
      </ScrollView>
      </View>
    );
  }
}

export default HomeContent;
