import React, {Component} from 'react';
import { connect } from 'react-redux';
import {ContentRow} from '../common';
import {getFeaturedPlaylists} from '../../../data';
import { numberOfTracks } from '../../../helper'

class BrowseContentRow extends Component {
  constructor(props){
    super(props);

    this.state = {
      header: `Get Yo' Cray On`,
      content: []
    }
  }

  componentDidMount(){
    this.getFeaturedBrowseContent()
  }

  async getFeaturedBrowseContent() {
    const featuredPlaylists = await getFeaturedPlaylists(this.props.authToken);
    console.log(featuredPlaylists)
    let featuredContent = [];

    for(playlist of featuredPlaylists.playlists.items){
      let content = {}

      content.index = playlist.id;
      content.type = 'playlist';
      content.id = playlist.id;
      content.title = playlist.name;
      content.imgUrl = playlist.images[0].url
      content.desc = numberOfTracks(playlist.tracks.total)

      featuredContent.push(content);
    }

    console.log(featuredContent)
    this.setState(prevState => {
      return {
        header: featuredPlaylists.message,
        content: [...prevState.content, ...featuredContent]
      }
    })

  }

  render() {
    return(
      <ContentRow
        header={this.state.header}
        content={this.state.content}
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

