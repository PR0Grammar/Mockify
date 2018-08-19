import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import configStyle from '../../../config/style';
import styles from '../styles/HamburgerButton.component.style';

/*
    Hamburger Button used for Login Stack.

    Defaults to big button
    
    Props:
        color
        size
        text
        textColor
        textSize
        disabled
*/
const HamburgerButton = (props) => {

    const buttonColor = {backgroundColor: props.color || configStyle.SPOTIFY_GREEN };
    const buttonSize = {width: props.small === true ? 140 : 300};
    const textColor ={color: props.textColor || configStyle.WHITE };
    const textSize = {fontSize: props.textSize || 16};
    const buttonDisabled = {opacity: props.disabled == true ? 0.5 : 1};

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{...styles.common, ...buttonColor, ...buttonSize, ...buttonDisabled}}
            disabled={props.disabled}
        >
            <Text style={{... styles.text, ...textSize, ...textColor}}>{props.text}</Text>
        </TouchableOpacity>
    );
    
}

export { HamburgerButton }