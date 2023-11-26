import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

export const ProductCardStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.pink,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    gap: 16,
  },
  textHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 10,
  },
});
