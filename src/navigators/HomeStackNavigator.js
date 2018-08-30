import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Home, AlbumSongList } from '../components/screens';


const routeConfigs = {
    HomeMain: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
    AlbumSongList: {
        screen: AlbumSongList,
        navigationOptions: {
            header: null,
        }
    }
}

const HomeStackNavigator = createStackNavigator(routeConfigs);

export default HomeStackNavigator;