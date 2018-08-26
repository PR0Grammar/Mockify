import { StyleSheet } from 'react-native';
import configStyle from '../../../config/style';

export default StyleSheet.create({
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    height: 150,
    width: 150,
    borderColor: configStyle.TEXT_GRAY,
    borderWidth: 0.5,
  },
  loadingText: {
    color: configStyle.WHITE,
    textAlign:'center',
    fontSize: 14,
    fontWeight: '600',
  },
  imgContainer: {
    height:150,
    width: 150,
    resizeMode: 'contain',
  }
})
