import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Home.component.style';

class Search extends Component {
  static navigationOptions = {
    title: 'Search',
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
          Search
        </Text>
      </View>
    );
  }
}

export { Search };
