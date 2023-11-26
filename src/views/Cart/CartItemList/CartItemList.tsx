import { View } from 'react-native';
import { CartItemListStyles } from './CartItemListStyles';
import { CartItem } from './CartItem/CartItem';
import { useSelector } from 'react-redux';
import { Store } from '../../../store';
import { Text } from '../../../components/Text/Text';
import { SmileySad } from 'phosphor-react-native';

export const CartItemList = () => {
  const products = useSelector((store: Store) => {
    return store.cartReducer.products;
  });

  if (products.length < 1) {
    return (
      <View style={CartItemListStyles.empty}>
      <Text fontSize={16}>
        Nenhum produto foi encontrado no seu carrinho. <SmileySad/>
      </Text>
      </View>
    );
  }

  return (
    <View style={CartItemListStyles.wrapper}>
      {products.map(product => {
        return <CartItem key={product.id} cartItem={product} />;
      })}
    </View>
  );
};
