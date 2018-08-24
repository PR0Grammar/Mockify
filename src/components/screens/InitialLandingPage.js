import React, {Component} from 'react';
import { Platform, Linking, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { LogoText, ButtonForm } from '../InitialLandingPage';
import * as actions from '../../actions';
import styles from '../styles/InitialLandingPage.component.style'


class InitialLandingPage extends Component {
        
    componentDidMount() {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                if(url === null || url === undefined) return; /* Change to better check */
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
        const routeName = url.includes('mockify://mockify/?access_token='); /* Change to better check */
        
        if (routeName) {
            this.props.addAuthToken(url.split('?access_token=')[1]);
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

export default connect(null, actions)(InitialLandingPage);