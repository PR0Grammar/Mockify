import React from 'react';
import { ScrollView } from 'react-native';
import ContentColumn from './ContentColumn';
import styles from '../../styles/ContentScrollRow.component.style';

const ContentScrollRow = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} horizontal={true} >
      <ContentColumn/>
      <ContentColumn/>
      <ContentColumn/>
      <ContentColumn/>
    </ScrollView>
  );
}

export { ContentScrollRow }
