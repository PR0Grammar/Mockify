import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/FormHeader.component.style';

/*
    Header used for sign up/sign in forms
*/

const FormHeader = (props) => {
    return(
        <View>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>
    );
}

export { FormHeader }