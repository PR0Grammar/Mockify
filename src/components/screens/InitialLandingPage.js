import React, {Component} from 'react';
import { Platform, Linking, View, ImageBackground } from 'react-native';
import styles from '../styles/InitialLandingPage.component.style'
import { LogoText, ButtonForm } from '../InitialLandingPage';
import queryString from 'query-string';

class InitialLandingPage extends Component {
        
    componentDidMount() {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                if(url === null) return; /* Change to better check */
                return this.navigate(url);
            });
        }
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL = (event) => {
        this.navigate(event.url);
    }

    navigate = (url) => {
        const { navigate } = this.props.navigation;
        const routeName = url.includes('mockify'); /* Change to better check */
        
        if (routeName) {
            navigate('AppStack');
        };
    }

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