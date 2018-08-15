import React from 'react';
import { View } from 'react-native';
import ContentRowHeader from './ContentRowHeader';
import ContentRowSubHeader from './ContentRowSubHeader';
import styles from '../../styles/RowHeader.component.style';

const RowHeader = (props) => {
  
  if(props.subHeader === undefined){
    return (
      <View style={styles.container}>
        <ContentRowHeader header={props.header}/>
      </View>
    );
  }

  else{
    return (
      <View style={styles.container}>
        <ContentRowHeader header={props.header}/>
        <ContentRowSubHeader subHeader={props.subHeader} />
      </View>
    );
  }

}

export { RowHeader };
