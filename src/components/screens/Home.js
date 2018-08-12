import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Home.component.style';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
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
          HomePage
        </Text>
      </View>
    );
  }
}

export default Home;
