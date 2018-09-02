import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Home, AlbumPage } from '../components/screens';


const routeConfigs = {
    HomeMain: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
    AlbumPage: {
        screen: AlbumPage,
        navigationOptions: {
            header: null,
        }
    }
}

const HomeStackNavigator = createStackNavigator(routeConfigs);

export default HomeStackNavigator;