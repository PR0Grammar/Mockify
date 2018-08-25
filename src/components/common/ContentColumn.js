import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import { SquareAlbumCard } from './SquareAlbumCard';
import { CircleAlbumCard } from './CircleAlbumCard';
import ColumnCaption from './ColumnCaption';
import ColumnSubCaption from './ColumnSubCaption';
import styles from '../styles/ContentColumn.component.style'

/*
  Returns the column with img, caption, and subCaption(usually follower #)

  Artist columns have circle imgs

  Props:
  artist - boolean if artist
  imgUrl - URL to image
  caption- Caption of Column
  subCaption - SubCaption of Column
*/

const ContentColumn = (props) => {
  if(props.artist == true) {
    return(
      <TouchableOpacity>
        <View style={styles.container}>
          <CircleAlbumCard imgUrl={props.imgUrl} />
          <ColumnCaption caption={props.caption} />
          <ColumnSubCaption subCaption={props.subCaption} />
        </View>
      </TouchableOpacity>
    );
  }

  else {
    return(    
      <TouchableOpacity>
        <View style={styles.container}>
          <SquareAlbumCard imgUrl={props.imgUrl} />
          <ColumnCaption caption={props.caption} />
          <ColumnSubCaption subCaption={props.subCaption} />
        </View>
      </TouchableOpacity>
    );
  }
  
}

export default ContentColumn;
