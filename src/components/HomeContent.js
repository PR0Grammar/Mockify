import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles/HomeContent.component.style.js';

class HomeContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={{color:'#FFFFFF', fontSize: 30}}>
          Home
        </Text>
      </View>
    );
  }
}

export default HomeContent;
