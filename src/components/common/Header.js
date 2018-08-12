import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Header.component.style.js';

const Header = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </View>
  );
}

export { Header }
