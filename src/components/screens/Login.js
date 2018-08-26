import React, { Component } from 'react';
import {LoginForm, LoginHeader} from '../Login'
import styles from '../styles/Login.component.style';
import ChangingBackgroundColor from '../common/ChangingBackgroundContainer';

class Login extends Component {
    constructor(props){
        super(props);
    } 

    render() {
        return (
            <ChangingBackgroundColor>
                <LoginHeader />
                <LoginForm />
            </ChangingBackgroundColor>
        );
    }
} 

export default Login;