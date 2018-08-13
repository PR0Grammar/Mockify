import React from 'react';
import { Image, View, Text } from 'react-native';
import styles from '../styles/SquareAlbumCard.component.style';

const SquareAlbumCard = (props) => {
  if(props.imgUrl === undefined) {
    return(
      <View style={styles.loadingContainer}>
        <Text>Loading Awesomeness...</Text>
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
