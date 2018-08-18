import React, {Component} from 'react';
import { View, ImageBackground } from 'react-native';
import styles from '../styles/InitialLandingPage.component.style'
import { HamburgerButton, LogoText } from '../common';

class InitialLandingPage extends Component {

    render() {
        return(
            <ImageBackground
            style={{display:'flex',flex:1, height: undefined, width: undefined, alignSelf:'stretch', resizeMode:'contain' }}
            source={{uri: 'http://www.devicers.com/wp-content/uploads/GIF-01-.gif'}}
            >
                <View style={styles.logoContainer}>
                    <LogoText />
                </View>
                <View style={styles.buttonFormContainer}>
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
            </ImageBackground>
        );
    }
}

export  { InitialLandingPage };