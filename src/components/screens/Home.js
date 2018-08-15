import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../common';
import HomeContent from '../Home/HomeContent';

class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header title='Home' />
        <HomeContent />
      </View>
    );
  }

}

export { Home };
