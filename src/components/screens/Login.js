import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

class Login extends Component {
    constructor(props){
        super(props);
    } 

    render() {
        return (
            <View style={{flex:1}}>
                <Text>WORKS!!!</Text>
                <Button 
                title='LOG IN'
                onPress={() => this.props.navigation.navigate('AppStack')}
                />
            </View>
        );
    }
} 

export { Login };