import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, BottomMusicBar } from '../common';
import HomeContent from '../Home/HomeContent';
import configStyle from '../../../config/style';

class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: configStyle.BLACK}}>
        <Header title='Home' />
        <HomeContent />
        <BottomMusicBar/>
      </View>
    );
  }

}


export default Home;
