import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {name as appName} from './app.json';
import AppBottomTabNavigator from './AppBottomTabNavigator';


const App = () => {
    return <AppBottomTabNavigator />
}
AppRegistry.registerComponent(appName, () => App);
