import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { ContentRow } from '../common';
import { getUserProfile } from '../../../data'

class MadeForUser extends Component {
  constructor(props){
    super(props);

    this.state = {
      userFirstName: 'You',
    }
  }

  componentDidMount() {
    axios.all([getUserProfile(this.props.authToken)])
    .then(axios.spread((userProfile) => {
      this.setState({
        userFirstName: userProfile.display_name,
      })
    }));
  }

  render() {

    return(
      <ContentRow 
        header={`Made for ${this.state.userFirstName}`}
        subHeader='Get better recommendations the more you listen.'
      />
    );

  }
}

const mapStateToProps = (state) =>{
  return {
    authToken: state.auth,
  }
}

export default connect(mapStateToProps)(MadeForUser);
