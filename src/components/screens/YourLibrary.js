import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from '../common'
import configStyle from '../../../config/style';

class YourLibrary extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: configStyle.BLACK}}>
        <Header title='Your Library' />
      </View>
    );
  }
}

export default YourLibrary;
