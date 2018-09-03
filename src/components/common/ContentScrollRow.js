import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ContentColumn from './ContentColumn';
import styles from '../styles/ContentScrollRow.component.style';
import {isEmpty} from 'lodash';

/*

  Props:
    content - Takes array of objects and utilizes the following properties in each obj if present:
              {
                index: '',
                type: oneOf['artist', 'album', 'playlist'],
                id: ''.
                title: '',
                desc: '',
                imgUrl: '',
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
      return( <ContentColumn 
                key={item.index} 
                id={item.id} 
                type={item.type} 
                caption={item.title} 
                subCaption={item.desc} 
                imgUrl={item.imgUrl} 
              />
      )
    })
    
  }
  
  render() {
    return (
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container} horizontal={true} >
        { isEmpty(this.props.content) ? this.fillerContent() : this.realContent()}
      </ScrollView>
    );
  }
}

export default ContentScrollRow;
