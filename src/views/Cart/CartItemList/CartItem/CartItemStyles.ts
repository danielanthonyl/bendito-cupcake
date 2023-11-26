import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/colors';

export const CartItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.softBlue,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    borderRadius: 100,
  },
  infosContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  titleContainer: { justifyContent: 'space-between', width: 150 },
  ingredientContainer: {
    flexDirection: 'row',
  },
  priceContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceButtonsContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceButtons:{
    width: 20,
    height: 20,
    alignItems:'center',
  },
});
