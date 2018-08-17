import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { UserInputField, HamburgerButton, BackButton } from '../common';
import styles from '../styles/Login.component.style';

class Login extends Component {
    constructor(props){
        super(props);
    } 

    render() {
        return (
            <View style={styles.container}>
                <BackButton onPress={() => this.props.navigation.goBack()} />
                <UserInputField

                />
                <UserInputField/>
                <HamburgerButton
                    text='LOG IN'
                    small={true}
                />
            </View>
        );
    }
} 

export { Login };