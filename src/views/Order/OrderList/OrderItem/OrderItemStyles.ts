import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/colors';

export const OrderItemStyles = StyleSheet.create({
  wrapper: {
    flexDirection:'row',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.softBlue,
    borderRadius: 40,
    padding: 10,
    paddingStart: 20,
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 100,
  },
  titleContainer: { width: 150, gap: 4 },
  ingredients: {
    marginTop: 16,
  },
});
