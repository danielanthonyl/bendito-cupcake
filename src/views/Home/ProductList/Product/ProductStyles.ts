import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/colors';

export const ProductItemStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.pink,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    maxWidth: '100%',
    flex: 1,
  },
  price: {
    alignSelf: 'flex-end',
  },
  icons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  image: {
    borderRadius: 100,
  },
});
