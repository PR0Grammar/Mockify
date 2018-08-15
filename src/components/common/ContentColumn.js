import React from 'react';
import {View} from 'react-native';
import { SquareAlbumCard } from './SquareAlbumCard';
import { CircleAlbumCard } from './CircleAlbumCard';
import ColumnCaption from './ColumnCaption';
import ColumnSubCaption from './ColumnSubCaption';
import styles from '../styles/ContentColumn.component.style'

/*
  Returns the column with img, caption, and subCaption(usually follower #)

  Artist columns have circle imgs
*/

const ContentColumn = (props) => {

  if(props.artist == true) {
    return(
      <View style={styles.container}>
        <CircleAlbumCard />
        <ColumnCaption />
        <ColumnSubCaption />
      </View>
    );
  }

  else {
    return(    
      <View style={styles.container}>
       <SquareAlbumCard />
       <ColumnCaption />
       <ColumnSubCaption />
      </View>
    );
  }
  
}

export default ContentColumn;
