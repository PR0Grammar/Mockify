import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/UserInputField.component.style';
import configStyles from '../../config/style';

class UserInputField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            focused: false,
        }
    }

    render() {
        const inputOpacity = { opacity: this.state.focused ? 1 : 0.5 }

        return(
            <TextInput
                style={{...styles.textInput, ...inputOpacity}}
                onFocus={() => this.setState({focused: true})}
                onBlur={() => this.setState({focused:false})}
                onChangeText={(text) => this.setState({text})}
                secureTextEntry={this.props.secure || false}
            />
        )
    }
}

export { UserInputField }