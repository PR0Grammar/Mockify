import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SquareAlbumCard from './common/SquareAlbumCard';
import RowHeader from './common/RowHeaders/RowHeader'
import styles from './styles/HomeContent.component.style.js';

class HomeContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View style={styles.container}>
        <RowHeader
          header='More of what you like'
          subHeader='Hear a little bit of everything you love.'
        />
        <SquareAlbumCard />
        <RowHeader
          header='More of what you like'
          subHeader='Hear a little bit of everything you love.'
        />
        <SquareAlbumCard />
        <RowHeader
          header='More of what you like'
          subHeader='Hear a little bit of everything you love.'
        />
        <SquareAlbumCard />
      </View>
    );
  }
}

export default HomeContent;
