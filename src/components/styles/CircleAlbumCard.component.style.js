import { StyleSheet } from 'react-native';
import configStyle from '../../../config/style';

export default StyleSheet.create({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: 128,
    width: 128,
    borderColor: configStyle.TEXT_GRAY,
    borderWidth: 0.5,
    borderRadius: 64,
    paddingLeft: 5,
    paddingRight: 5,
  },
  loadingText: {
    color: configStyle.WHITE,
    fontSize: 14,
    fontWeight: '600',
  },
  imgContainer: {
    height:128,
    width: 128,
    borderRadius: 64,
    resizeMode: 'contain',
  }
})
