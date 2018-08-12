import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { Home, Browse, Search, Radio, YourLibrary } from './src/components/screens';

const AppBottomTabNavigator = createBottomTabNavigator({
  Home: Home,
  Browse: Browse,
  Search: Search,
  Radio: Radio,
  YourLibrary: YourLibrary
});

export default AppBottomTabNavigator;
