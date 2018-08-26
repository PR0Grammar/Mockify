import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { BrowseContentRow, BrowseCategoryList } from '../Browse';
import { Header } from '../common'
import configStyle from '../../../config/style';

class Browse extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: configStyle.BLACK}}>
        <ScrollView>
          <Header title='Browse' />
          <BrowseContentRow />
          <BrowseCategoryList/>
        </ScrollView>
      </View>
    );
  }
}

export default Browse;
