import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ContentColumn from './ContentColumn';
import styles from '../styles/ContentScrollRow.component.style';
import {isEmpty} from 'lodash';

/*

  Props:
    content - Takes array of objects and utilizes the following properties in each obj if present:
              {
                index: int,
                isArtist: boolean,
                artistId: '',
                albumId: '',
                trackId: '',
                artistName: '',
                albumName:'',
                artistImgUrl: '',
                albumImgUrl: '',
                artistDesc: '',
                albumDesc: '',
              }
*/

class ContentScrollRow extends Component {
  constructor(props){
    super(props);
  }

  fillerContent() {
    return(
      <>
        <ContentColumn />
        <ContentColumn />
        <ContentColumn />
        <ContentColumn />
      </>
    )
  }

  realContent() {
    return this.props.content.map(item => {
      return item.isArtist ? <ContentColumn key={item.index} artist={true} caption={item.artistName} subCaption={item.artistDesc} imgUrl={item.artistImgUrl} /> : 
        <ContentColumn key={item.index} caption={item.albumName} subCaption={item.albumDesc} imgUrl={item.albumImgUrl} />
    })
    
  }
  
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} horizontal={true} >
        { isEmpty(this.props.content) ? this.fillerContent() : this.realContent()}
      </ScrollView>
    );
  }
}

export { ContentScrollRow }
