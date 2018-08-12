import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/ContentRowHeader.component.style';

const ContentRowHeader = (props) => {
  return(
    <View>
      <Text style={styles.header}>
        {props.header}
      </Text>
    </View>
  );
}

export default ContentRowHeader;
