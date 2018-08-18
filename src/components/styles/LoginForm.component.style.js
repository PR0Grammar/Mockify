import { StyleSheet } from 'react-native';
import configStyle from '../../config/style';

export default StyleSheet.create({
    masterContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    formContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems:'center',
    },
    loginHelpContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginHelpText: {
        fontFamily: 'Montseratt',
        fontSize: 14,
        color: configStyle.WHITE,
    },
});