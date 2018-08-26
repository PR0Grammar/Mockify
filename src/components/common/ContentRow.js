import React from 'react';
import {View} from 'react-native';
import { RowHeader } from './RowHeaders/RowHeader';
import { ContentScrollRow } from './ContentScrollRow';
import styles from '../styles/ContentRow.component.style'

const ContentRow = (props) => {
    return(
        <View style={styles.container}>
            <RowHeader header={props.header} subHeader={props.subHeader} />
            <ContentScrollRow content={props.content} />
        </View>
    )
}

export default ContentRow;