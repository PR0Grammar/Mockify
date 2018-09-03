import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {sample} from 'lodash';
import styles from '../styles/CategoryCard.component.style'
import configStyle from '../../../config/style'

class CategoryCard extends Component {
    render() {
        return(
            <TouchableOpacity>
                <View style={[styles.container, {backgroundColor: sample(configStyle.CARD_COLORS) }]}>
                        <Text style={styles.text}>{this.props.category}</Text>
                </View>
            </TouchableOpacity>

        )
    }
}

export default CategoryCard;