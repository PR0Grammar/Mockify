import React from 'react';
import { Image, View } from 'react-native';
import styles from '../styles/SquareAlbumCard.component.style';

const SquareAlbumCard = () => {
  return(
    <Image
      style={styles.container}
      source={require('../../public/img/musical-note.png')}
    />
  );
}

export { SquareAlbumCard };
