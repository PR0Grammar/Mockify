import { StyleSheet } from 'react-native';
import configStyle from '../../../config/style';

export default StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },
    trackInfoContainer:{
        display: 'flex',
        flexDirection: 'column',
    },
    captionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    trackTitle: {
        color: configStyle.WHITE,
        fontFamily: 'Montserrat',
        fontSize: 18,
    },
    trackCaption: {
        color: configStyle.TEXT_GRAY,
        fontFamily: 'Montserrat',
        fontSize: 14,        
    },
    icon: {
        marginRight: 5,
    }
})