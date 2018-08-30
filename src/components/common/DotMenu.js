import React from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import configStyle from '../../../config/style';

/*
    Custom back button icon.
    View provided to prevent row overlap
*/

const DotMenu = (props) => {
    return(
        <View style={{margin:5,}}>
            <Icon name={'dots-three-vertical'} size={30} color={configStyle.WHITE} onPress={props.onPress}/>
        </View>
    );
}

export default DotMenu