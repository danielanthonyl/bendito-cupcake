import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

export const CartHeaderStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.softBlue,
    marginBottom: 20,
  },
  backContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingVertical: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  buttons: {
    width: '50%',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
  },
  buttonLine: {height:1, width:'100%', borderRadius: 100}
});
