import React from 'react';
import { View } from 'react-native';
import configStyle from '../../../config/style';

const ButtonSeparator = () => {
    return(
        <View
            style={{
                borderBottomColor: configStyle.WHITE,
                width: 300,
                borderBottomWidth: 1,
                marginTop:10,
                marginBottom:10,
            }}
        />
    )
}

export default ButtonSeparator;