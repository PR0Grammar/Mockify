import React, { Component } from 'react';
import { Animated } from 'react-native';
import styles from '../styles/ChangingBackgroundContainer.component.style';

class ChangingBackgroundColor extends Component {
  
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.loop(
     Animated.sequence([
         Animated.timing(this.animatedValue, {
          toValue: 300,
          duration: 8000,
        }),
        Animated.timing(this.animatedValue, {
          toValue:0,
          duration:8000,
        }
        )
     ])
    ).start();
  }
  
  
  render() {
    const interpolateColor = this.animatedValue.interpolate({
      inputRange: [0, 300],
      outputRange: this.props.colorRange || ['rgb(118,48,255)','rgb(191,127,191)'],
    })
    const animatedStyle = {
      backgroundColor: interpolateColor,

    }
    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            {this.props.children}
        </Animated.View>
    );
  }
}

export default ChangingBackgroundColor;