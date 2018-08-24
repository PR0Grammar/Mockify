import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Header } from '../common';
import HomeContent from '../Home/HomeContent';

class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header title='Home' />
        <HomeContent />
      </View>
    );
  }

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    authToken: state.auth,
  }
}


export default connect(mapStateToProps)(Home);
