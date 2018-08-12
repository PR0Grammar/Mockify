import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { RowHeader, ContentScrollRow } from './common';
import styles from './styles/HomeContent.component.style.js';

class HomeContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <ScrollView contentContainerStyle={styles.container}>
        <RowHeader
          header='More of what you like'
          subHeader='Hear a little bit of everything you love.'
        />
        <ContentScrollRow/>
        <RowHeader
          header='More of what you like'
          subHeader='Hear a little bit of everything you love.'
        />
        <ContentScrollRow/>
        <RowHeader
          header='More of what you like'
          subHeader='Hear a little bit of everything you love.'
        />
        <ContentScrollRow/>
      </ScrollView>
    );
  }
}

export default HomeContent;
