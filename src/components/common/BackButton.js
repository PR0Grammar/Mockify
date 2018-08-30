import React from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import configStyle from '../../../config/style';

/*
    Custom back button icon.
    View provided to prevent row overlap
*/

const BackButton = (props) => {
    return(
        <View style={{margin:5,}}>
            <Icon name={'chevron-thin-left'} size={20} color={configStyle.WHITE} onPress={props.onPress}/>
        </View>
    );
}

export default BackButton