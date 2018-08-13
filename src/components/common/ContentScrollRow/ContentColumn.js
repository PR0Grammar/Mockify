import React from 'react';
import {View} from 'react-native';
import { SquareAlbumCard } from '../'
import ColumnCaption from './ColumnCaption';
import ColumnSubCaption from './ColumnSubCaption';
import styles from '../../styles/ContentColumn.component.style'

const ContentColumn = (props) => {
  return(
    <View style={styles.container}>
      <SquareAlbumCard />
      <ColumnCaption />
      <ColumnSubCaption />
    </View>
  );
}

export default ContentColumn;
