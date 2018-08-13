import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/ColumnSubCaption.component.style';


const ColumnSubCaption = () => {
  return(
    <View>
      <Text numberOfLines={1} ellipsizeMode='tail' style={styles.subCaption}>
        2,454,445 FOLLOWERS
      </Text>
    </View>
  );
}

export default ColumnSubCaption;
