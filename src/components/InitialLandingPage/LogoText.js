import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../styles/LogoText.component.style';

const LogoText = () => {
    return(
        <View style={styles.container}>
            <Image source={require('../../public/img/wave64.png')}/>
            <Text style={styles.text}>Mockify</Text>
        </View>
    );
}

export default LogoText;