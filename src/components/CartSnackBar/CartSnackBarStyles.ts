import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const CartSnackBarStyles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    left: 0,
    padding: 10,
  },
  container: {
    backgroundColor: Colors.softBlue,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    elevation: 2,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
