import React, {Component} from 'react';
import {ContentRow} from '../common';

class MoreOfWhatYouLike extends Component {
  constructor(props){
    super(props);

    this.state = {
      mostPlayedArtist: [],
      mostPlayedAlbums: [],
    }
  }

  render() {
    return(
      <ContentRow
        header='More of what you like'
       subHeader='Hear a little bit of everything you love'
      />
    );
  }

}

export default MoreOfWhatYouLike;