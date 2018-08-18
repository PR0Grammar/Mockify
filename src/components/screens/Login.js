import React, { Component } from 'react';
import { View } from 'react-native';
import {LoginForm, LoginHeader} from '../Login'
import styles from '../styles/Login.component.style';

class Login extends Component {
    constructor(props){
        super(props);
    } 

    render() {
        return (
            <View style={styles.container}>
                <LoginHeader />
                <LoginForm />
            </View>
        );
    }
} 

export { Login };