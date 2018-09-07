import { StyleSheet } from 'react-native';
import configStyle from '../../../config/style'


export default StyleSheet.create({
  container: {
    display: 'flex',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    margin: 10,
  },
  input: {
    fontFamily: 'Montserrat-SemiBold',
    backgroundColor: configStyle.TEXT_GRAY,
    borderRadius: 10,
    fontWeight: '600',
    color: configStyle.WHITE,
  }
})
