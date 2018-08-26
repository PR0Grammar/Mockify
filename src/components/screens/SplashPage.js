import React, { Component } from 'react';
import { ActivityIndicator, Platform, Linking, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import configStyle from '../../../config/style';

class SplashPage extends Component {

    componentDidMount() {
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                 /* Change to better check */
                if(url === null || url === undefined) {
                    this.props.navigation.navigate('InitialLandingPage')
                };
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
        }
        else {
            navigate('InitialLandingPage')
        }
    }

    render() {
        return(
            <View style={{ flex:1, backgroundColor: configStyle.BLACK, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator color='green' size='large' />
            </View>
        );
    }
}

export default connect(null, actions)(SplashPage);