import React, {Component} from 'react';
import { connect } from 'react-redux';
import {ContentRow} from '../common';

class BrowseContentRow extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <ContentRow
        header={`Get Yo' Cray On`}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authToken: state.auth,
  }
}

export default connect(mapStateToProps)(BrowseContentRow);

