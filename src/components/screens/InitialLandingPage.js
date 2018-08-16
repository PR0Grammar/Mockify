import React, {Component} from 'react';
import { View, ImageBackground } from 'react-native';
import styles from '../styles/InitialLandingPage.component.style'
import { HamburgerButton } from '../common';

class InitialLandingPage extends Component {

    render() {
        return(
            <View style={{...styles.container}}>
                 <HamburgerButton 
                    text='SIGN UP FREE'
                    onPress={() => this.props.navigation.navigate('Login')} 
                />
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

export  { InitialLandingPage };