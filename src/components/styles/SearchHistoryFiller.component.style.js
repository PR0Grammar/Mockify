import { StyleSheet } from 'react-native';
import configStyle from '../../../config/style'

export default StyleSheet.create({
    container: {
        display: 'flex',
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: configStyle.WHITE,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
    },
    subText: {
        color: configStyle.WHITE,
        fontSize: 14,
        fontFamily: 'Montserrat',
    }
});