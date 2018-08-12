import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Home.component.style';

class YourLibrary extends Component {
  static navigationOptions = {
    title: 'YourLibrary',
    headerStyle: {
      backgroundColor: '#333333'
    },
    headerTitleStyle: {
     fontWeight: '500',
     fontSize: 16,
     textAlign: 'center',
     alignSelf: 'center',
     color: '#FFFFFF'
    }
  };

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'#FFFFFF'}}>
          Your Library
        </Text>
      </View>
    );
  }
}

export { YourLibrary };
