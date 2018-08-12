import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/components/screens/Home';

const AppStackNavigator = createStackNavigator({
  Home: Home,
});

export default AppStackNavigator;
