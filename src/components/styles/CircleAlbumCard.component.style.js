import { StyleSheet } from 'react-native';
import configStyle from '../../../config/style';

export default StyleSheet.create({
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    borderColor: configStyle.TEXT_GRAY,
    borderWidth: 0.5,
    borderRadius: 64,
  },
  loadingText: {
    color: configStyle.WHITE,
    fontSize: 14,
    fontWeight: '600',
  },
  imgContainer: {
    height:150,
    width: 150,
    borderRadius: 75,
    resizeMode: 'cover',
  }
})
