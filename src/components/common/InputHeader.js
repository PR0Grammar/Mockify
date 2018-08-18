import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/InputHeader.component.style'

/*
    Header used for TextInputs
*/

const InputHeader = (props) => {
    return(
        <View>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>
    );
}

export { InputHeader }