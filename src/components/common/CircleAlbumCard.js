import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from '../styles/CircleAlbumCard.component.style';
import loadingText from '../../../config/loadingFillerText';
import ChangingBackgroundColor from './ChangingBackgroundContainer';

const CircleAlbumCard = (props) => {
  if(props.imgUrl === undefined) {
    return(
      <ChangingBackgroundColor>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>{loadingText[Math.floor(Math.random() * loadingText.length)]}</Text>
        </View>
      </ChangingBackgroundColor>
    );
  }
  return(
    <Image
      style={styles.imgContainer}
      source={{uri: props.imgUrl}}
    />
  );
}

export { CircleAlbumCard };
