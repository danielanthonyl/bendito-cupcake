import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

export const InfoHandlerStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: Colors.softBlue,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueWithButton: {
    flexDirection: 'row',
    gap: 16,
  },
});
