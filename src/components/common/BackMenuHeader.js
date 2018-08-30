import React from 'react';
import { View } from 'react-native'
import styles from '../styles/BackMenuHeader.component.style';
import BackButton from './BackButton';
import DotMenu from './DotMenu';

const BackMenuHeader = (props) => {
    return(
      <View style={styles.container}>
        <BackButton onPress={props.backOnPress} />
        <DotMenu />
      </View>
    );
  }
  
export default BackMenuHeader;