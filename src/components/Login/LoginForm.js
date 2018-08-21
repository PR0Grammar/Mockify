import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native';
import { userLogin } from '../../../data';
import { FormHeader, InputHeader, UserInputField, HamburgerButton } from '../common';
import styles from '../styles/LoginForm.component.style';
import configStyle from '../../../config/style';
import env from '../../../config/env.json';
import { withNavigation } from 'react-navigation';

class LoginForm extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.masterContainer}>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <InputHeader text={'Email or username'} />
                        <UserInputField />
                    </View>
                    <View style={styles.inputContainer}>
                        <InputHeader text={'Password'} />
                        <UserInputField secure={true}/>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <HamburgerButton
                        color={configStyle.WHITE}
                        textColor={configStyle.BLACK}
                        text='LOG IN'
                        small={true}
                        disabled={false}
                        onPress={() => Linking.openURL(env.LOGIN_URL)}
                    />
                </View>
                <View style={styles.loginHelpContainer}>
                    <Text 
                        style={styles.loginHelpText}
                        onPress={() => Linking.openURL('https://support.spotify.com/us/article/recover-your-account/')}
                    >
                        { 'Having trouble logging in? Get help here.'}
                    </Text>
                </View>
            </View>
        );
    }
}

export default withNavigation(LoginForm)