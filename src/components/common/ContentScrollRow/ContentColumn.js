import React from 'react';
import {View} from 'react-native';
import { SquareAlbumCard } from '../'
import ColumnCaption from './ColumnCaption';
import styles from '../../styles/ContentColumn.component.style'

const ContentColumn = (props) => {
  return(
    <View style={styles.container}>
      <SquareAlbumCard />
      <ColumnCaption />
    </View>
  );
}

export default ContentColumn;
