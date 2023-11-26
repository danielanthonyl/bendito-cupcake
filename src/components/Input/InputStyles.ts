import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const InputStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: Colors.lightBlue,
    height: 42,
    borderRadius: 100,
    paddingHorizontal: 20,
  },
  suffix: {
    position: 'absolute',
    right: 12,
    top: '18%',
  },
});
