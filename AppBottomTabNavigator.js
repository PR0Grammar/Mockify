import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import { Home, Browse, Search, Radio, YourLibrary } from './src/components/screens';
import configStyle from './src/config/style';

const routeConfigs = {
  Home: {
    screen: Home,
    tabBarIcon: ({tintColor}) => (
      <Icon name='home' size={12}/>
    ),
  },
  Browse: Browse,
  Search: Search,
  Radio: Radio,
  YourLibrary: {
    screen: YourLibrary,
    tabBarLabel: 'Your Library',
  }
};

const options = {
  tabBarOptions: {
    labelStyle: ({tintColor})=> ({
      fontSize: 8,
      color: tintColor,
    }),
    style: {
      backgroundColor: configStyle.GRAY,
    },
    activeTintColor: configStyle.SPOTIFY_GREEN,
    inactiveTintColor: configStyle.WHITE,
  },
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `home`;
      }
      else if(routeName === 'Browse') {
        iconName = 'archive';
      }
      else if (routeName === 'Search') {
        iconName = 'search';
      }
      else if (routeName === 'Radio') {
        iconName = 'radio';
      }
      else if(routeName === 'YourLibrary') {
        iconName = 'book';
      }
      return <Icon name={iconName} size={20} color={tintColor} />;
    },
  }),
}

const AppBottomTabNavigator = createBottomTabNavigator(routeConfigs, options);

export default AppBottomTabNavigator;
