import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppSwitchNavigator from './src/navigators/AppSwitchNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';


const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <AppSwitchNavigator />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => App);
