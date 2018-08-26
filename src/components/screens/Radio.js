import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from '../common'
import configStyle from '../../../config/style';

class Radio extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: configStyle.BLACK}}>
        <Header title='Radio' />
      </View>
    );
  }
}

export default Radio;
