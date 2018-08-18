import React, { Component } from 'react';
import { View } from 'react-native';
import { FormHeader, InputHeader, UserInputField, HamburgerButton } from '../common';
import styles from '../styles/LoginForm.component.style';
import configStyle from '../../config/style';
import { withNavigation } from 'react-navigation';

class LoginForm extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.masterContainer}>
                <View style={styles.formContainer}>
                    <InputHeader text={'Email or username'} />
                    <UserInputField />
                    <InputHeader text={'Password'} />
                    <UserInputField secure={true}/>
                </View>
                <View style={styles.buttonContainer}>
                    <HamburgerButton
                        color={configStyle.WHITE}
                        textColor={configStyle.BLACK}
                        text='LOG IN'
                        small={true}
                        disabled={false}
                        onPress={() => this.props.navigation.navigate('AppStack')}
                    />
                </View>
            </View>
        );
    }
}

export default withNavigation(LoginForm)