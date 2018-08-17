import { StyleSheet } from 'react-native';
import configStyle from '../../config/style'

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: configStyle.BLACK,
    },
    logoContainer: {
        display:'flex',
        flex: 1,
        justifyContent:'flex-start',
        margin: 30,
    },
    buttonFormContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: configStyle.BLACK,
        margin: 30,
    }
});