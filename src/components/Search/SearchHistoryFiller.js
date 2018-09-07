import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/SearchHistoryFiller.component.style';
import configStyles from '../../../config/style'

const SearchHistroyFiller = () => {
    return(
        <View style={styles.container}>
            <Icon name={'search'} color={configStyles.WHITE} size={150}/>
            <Text style={styles.text}>{'Search Mockify'}</Text>
            <Text style={styles.subText}>{'Find your favorite music, videos, and podcasts.'}</Text>
        </View>
    )
}

export default SearchHistroyFiller;