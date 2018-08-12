import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/ContentRowSubHeader.component.style';

const ContentRowSubHeader = (props) => {
  return(
    <View>
      <Text style={styles.subHeader}>
        {props.subHeader}
      </Text>
    </View>
  );
}

export default ContentRowSubHeader;
