import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {name as appName} from './app.json';
import AppSwitchNavigator from './src/navigators/AppSwitchNavigator';


const App = () => {
    return <AppSwitchNavigator />
}

AppRegistry.registerComponent(appName, () => App);
