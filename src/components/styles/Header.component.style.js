import { StyleSheet } from 'react-native';
import configStyle from '../../config/style'

export default StyleSheet.create({
  container: {
    backgroundColor: configStyle.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  }
})
