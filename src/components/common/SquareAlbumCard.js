import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from '../styles/SquareAlbumCard.component.style';
import loadingText from '../../../config/loadingFillerText';

const SquareAlbumCard = (props) => {
  if(props.imgUrl === undefined) {
    return(
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>{loadingText[Math.floor(Math.random() * loadingText.length)]}</Text>
      </View>
    );
  }
  return(
    <Image
      style={styles.container}
      source={{uri: props.imgUrl}}
    />
  );
}

export { SquareAlbumCard };
