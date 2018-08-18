import React, { Component } from 'react';
import {LoginForm, LoginHeader, LoginBackgroundContainer} from '../Login'
import styles from '../styles/Login.component.style';

class Login extends Component {
    constructor(props){
        super(props);
    } 

    render() {
        return (
            <LoginBackgroundContainer>
                <LoginHeader />
                <LoginForm />
            </LoginBackgroundContainer>
        );
    }
} 

export { Login };