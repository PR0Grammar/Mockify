import React, {Component} from 'react';
import { View, ImageBackground } from 'react-native';
import styles from '../styles/InitialLandingPage.component.style'
import { HamburgerButton, LogoText } from '../common';
import { ButtonForm } from '../InitialLandingPage';

class InitialLandingPage extends Component {

    render() {
        return(
            <ImageBackground
            style={{display:'flex',flex:1, height: undefined, width: undefined, alignSelf: 'stretch',resizeMode:'cover' }}
            source={{uri: 'http://inkygoodness.com/wp-content/uploads/2017/06/jose-mendez-spotify-4.gif'}}
            >
                <View style={styles.logoContainer}>
                    <LogoText />
                </View>
                <ButtonForm />
            </ImageBackground>
        );
    }
}

export  { InitialLandingPage };