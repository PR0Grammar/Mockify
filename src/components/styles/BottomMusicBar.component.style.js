import { StyleSheet, Dimensions } from 'react-native';
import configStyle from '../../../config/style';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor:'black', 
        borderBottomWidth: 1, 
        height: 50,
        width: width, 
        backgroundColor: configStyle.GRAY, 
    },
    icon: {
        margin: 20,
    }
})