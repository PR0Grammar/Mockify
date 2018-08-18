import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { BackButton, FormHeader } from '../common';
import styles from '../styles/LoginHeader.component.style';

class LoginHeader extends Component {
    render() {
        return(
            <View style={styles.container}>
                <BackButton onPress={() => this.props.navigation.goBack()}/>
                <View style={styles.formHeaderContainer}>
                    <FormHeader text={'Log in'} />
                </View>
            </View>
        )
    }
}  

export default withNavigation(LoginHeader);