import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { ContentRow } from '../common';

class JumpBackIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      recentlyPlayed: [],
    }
  }

  componentDidMount() {
  }

  async getUserLongTermContent() {
  }

  render() {
    return(
      <ContentRow
        header='Jump Back In'
        subHeader='Your top listens from the past few months.'
      />
    );
  }

}

const mapStateToProps = (state) => {
  return {
    authToken: state.auth
  }
}

export default connect(mapStateToProps)(JumpBackIn);