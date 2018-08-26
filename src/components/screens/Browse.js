import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {BrowseContentRow} from '../Browse';
import { Header } from '../common'
import configStyle from '../../../config/style';

class Browse extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: configStyle.BLACK}}>
        <Header title='Browse' />
        <BrowseContentRow />
      </View>
    );
  }
}

export default Browse;
