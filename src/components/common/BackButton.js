import React from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import configStyle from '../../config/style';

/*
    Custom back button icon.
    View provided to prevent row overlap
*/

const BackButton = (props) => {
    return(
        <View style={{width:50, margin:10,}}>
            <Icon name={'keyboard-arrow-left'} size={40} color={configStyle.WHITE} onPress={props.onPress}/>
        </View>
    );
}

export { BackButton };