import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/colors';

export const CartSuggestionItemStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.softBlue,
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  addButton: { borderBottomWidth: 0.5 },
});
