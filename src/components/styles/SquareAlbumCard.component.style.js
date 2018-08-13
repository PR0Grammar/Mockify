import { StyleSheet } from 'react-native';
import configStyle from '../../config/style';

export default StyleSheet.create({
  loadingContainer: {
    height: 128,
    width: 128,
    borderColor: configStyle.TEXT_GRAY,
    borderWidth: 0.5,
  },
  imgContainer: {
    height:128,
    width: 128,
    resizeMode: 'contain',
  }
})
