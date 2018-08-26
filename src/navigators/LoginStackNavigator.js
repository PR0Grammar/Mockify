import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { InitialLandingPage, Login, SplashPage } from '../components/screens';
import configStyle from '../../config/style';


const routeConfigs = {
    SplashPage: {
        screen: SplashPage,
        navigationOptions: {
            header: null,
        }
    },
    InitialLandingPage: {
        screen: InitialLandingPage,
        navigationOptions: {
            header: null
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        },
    },
}

const LoginStackNavigator = createStackNavigator(routeConfigs);

export default LoginStackNavigator;