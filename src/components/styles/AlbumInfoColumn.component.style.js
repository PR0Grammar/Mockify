import { StyleSheet } from 'react-native';
import configStyle from '../../../config/style';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: configStyle.BLACK,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumNameText: {
        color: configStyle.WHITE,
        fontSize: 25,
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 5,
        marginBottom:5,
    },
    artistNameText: {
        color: configStyle.TEXT_GRAY,
        fontFamily: 'Montserrat',
        fontSize: 10,
        marginTop: 5,
        marginBottom:5,
    },
    buttonContainer: {
        marginTop: 5,
        marginBottom:10,
    }
});
