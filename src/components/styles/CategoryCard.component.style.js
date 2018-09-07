import { StyleSheet, Dimensions } from 'react-native';
import configStyle from '../../../config/style';

const { width } = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        height: 100,
        width: 175,
        margin: 5,
        borderRadius: 10,
        opacity: 0.5,
    },
    text: {
        color: configStyle.WHITE,
        fontSize: 16,
        padding: 10,
        fontFamily: 'Montserrat-Bold'
    }
})