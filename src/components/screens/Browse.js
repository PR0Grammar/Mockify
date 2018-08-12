import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Home.component.style';

class Browse extends Component {
  static navigationOptions = {
    title: 'Browse',
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
          Browse
        </Text>
      </View>
    );
  }
}

export { Browse };
