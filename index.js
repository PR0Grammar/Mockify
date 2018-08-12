import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {name as appName} from './app.json';
import AppStackNavigator from './AppStackNavigator';


const App = () => {
    return <AppStackNavigator />
}
AppRegistry.registerComponent(appName, () => App);
