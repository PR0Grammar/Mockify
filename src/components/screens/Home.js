import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
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
        <StatusBar hidden />
        <Header title='Home' />
        <HomeContent />
        <BottomMusicBar/>
      </View>
    );
  }

}


export default Home;
