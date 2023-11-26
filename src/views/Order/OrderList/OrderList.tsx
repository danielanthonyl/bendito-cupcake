import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Store } from '../../../store';
import { OrderItem } from './OrderItem/OrderItem';
import { OrderListStyles } from './OrderListStyles';

export const OrderList = () => {
  const { products } = useSelector((store: Store) => store.cartReducer);

  return (
    <View style={OrderListStyles.wrapper}>
      {products.map(product => (
        <OrderItem key={product.id} cartProduct={product} />
      ))}
    </View>
  );
};
