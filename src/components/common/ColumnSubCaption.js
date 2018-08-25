import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/ColumnSubCaption.component.style';


const ColumnSubCaption = (props) => {
  return(
    <View>
      <Text numberOfLines={1} ellipsizeMode='tail' style={styles.subCaption}>
        {props.subCaption}
      </Text>
    </View>
  );
}

export default ColumnSubCaption;
