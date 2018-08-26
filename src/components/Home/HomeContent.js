import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import MadeForUser from './MadeForUser';
import MoreOfWhatYouLike from './MoreOfWhatYouLike';
import RecommendedStations from './RecommendedStations';
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
        <RecommendedStations />
      </ScrollView>
      </View>
    );
  }
}

export default HomeContent;
