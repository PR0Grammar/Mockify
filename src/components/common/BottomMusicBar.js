import React, { Component } from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import configStyle from '../../../config/style';
import styles from '../styles/BottomMusicBar.component.style'

class BottomMusicBar extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Icon name={'chevron-thin-up'} color={configStyle.WHITE} size={30} />
                <Text style={{color:'white'}}> MUSIC </Text>
                <Icon name={'controller-play'} color={configStyle.WHITE} size={30} />
            </View>
        )
    }
}

export default BottomMusicBar;