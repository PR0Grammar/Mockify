import React, { Component } from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import configStyle from '../../../config/style';
import styles from '../styles/BottomMusicBar.component.style'

class BottomMusicBar extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Icon name={'keyboard-arrow-up'} color={configStyle.WHITE} size={30} />
                <Text style={{color:'white'}}> MUSIC </Text>
                <Icon name={'play-circle-outline'} color={configStyle.WHITE} size={30} />
            </View>
        )
    }
}

export default BottomMusicBar;