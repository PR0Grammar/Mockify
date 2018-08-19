import { StyleSheet } from 'react-native';
import configStyle from '../../../config/style'

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 50,
        color: configStyle.WHITE,
        marginLeft: 10,
    }
});