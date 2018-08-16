import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import LoginStackNavigator from './LoginStackNavigator';
import AppBottomTabNavigator from './AppBottomTabNavigator';

const AppSwitchNavigator = createSwitchNavigator (
    {
        LoginStack: LoginStackNavigator,
        AppStack: AppBottomTabNavigator, 
    },
    {
        initialRouteName: 'LoginStack',
    },
);

export default AppSwitchNavigator;