import { StyleSheet } from 'react-native';
import configStyle from '../../../config/style';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: configStyle.GRAY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    albumNameText: {
        color: configStyle.WHITE,
        fontSize: 25,
        fontFamily: 'Montserrat-SemiBold'
    },
    artistNameText: {
        color: configStyle.TEXT_GRAY,
        fontFamily: 'Montserrat',
        fontSize: 10,
    }
});
