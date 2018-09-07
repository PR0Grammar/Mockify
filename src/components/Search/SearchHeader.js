import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import styles from '../styles/SearchHeader.component.style';
import configStyles from '../../../config/style';


class SearchHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            focused: false,
        }
    }
    render() {
        const selectedProps = {
            height: this.state.focused ? 50 : 40,
            textAlign: this.state.focused ? 'left' : 'center',
        }

        return(
            <View style={styles.container}>
                <TextInput 
                    style={{... styles.input, ...selectedProps}}
                    placeholder={this.state.focused ? '' : 'Search'}
                    placeholderTextColor={configStyles.WHITE}
                    onFocus={() => this.setState({focused: true})}
                    onBlur={() => this.setState({focused:false})}
                    onChangeText={(text) => this.setState({text})}
                    />
            </View>
        )
    }
}

export default SearchHeader;