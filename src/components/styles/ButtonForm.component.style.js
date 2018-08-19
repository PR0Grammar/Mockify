import { StyleSheet } from 'react-native';
import configStyle from '../../../config/style'

export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 30,
    },
    alreadyUserText: {
        color: configStyle.WHITE,
        fontSize: 14,
        fontFamily: 'Montserrat',
        paddingBottom: 5,
    },
})