import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { HamburgerButton } from '../common';
import styles from '../styles/ButtonForm.component.style'
import ButtonSeparator from './ButtonSeparator';

class ButtonForm extends Component {

    render() {
        return(
            <View style={styles.container}>
                <HamburgerButton 
                text='SIGN UP FREE'
                onPress={() => this.props.navigation.navigate('Login')} 
                />
                <ButtonSeparator />
                <Text style={styles.alreadyUserText}>{'Already a user?'}</Text>
                <HamburgerButton 
                text='LOG IN'
                color='#FFFFFF'
                textColor='#000000'
                onPress={() => this.props.navigation.navigate('Login')} 
                />
             </View>
        );
    }
    
}

export default withNavigation(ButtonForm);