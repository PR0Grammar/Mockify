import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/ColumnCaption.component.style';

const ColumnCaption = (props) => {
  return(
    <View>
      <Text style={styles.caption}>
        {props.caption}
      </Text>
    </View>
  );
}

export default ColumnCaption;
