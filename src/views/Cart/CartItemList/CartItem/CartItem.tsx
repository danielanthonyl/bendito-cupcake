import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from '../../../../components/Text/Text';
import { Button } from '../../../../components/Button/Button';
import { CartItemStyles } from './CartItemStyles';
import { CartProduct } from '../../store/reducer/cartReducer';
import { convertToBRLCurrency } from '../../../../helpers/convertToBRLCurrency';
import { cartAddProduct } from '../../store/actions/cartAddProduct';
import { useDispatch } from 'react-redux';
import { joinIngredientsName } from '../../helpers/joinIngredientsName';
import { cartRemoveProduct } from '../../store/actions/cartRemoveProduct';
import { cartDecrementProduct } from '../../store/actions/cartDecrementProduct';

export const CartItem = ({ cartItem }: { cartItem: CartProduct }) => {
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(cartAddProduct({ id: cartItem.id }) as any);
  };

  const handleRemoveCart = () => {
    dispatch(cartRemoveProduct({ cartProduct: cartItem }) as any);
  };

  const handleDecrementCart = () => {
    dispatch(cartDecrementProduct({ cartProduct: cartItem }) as any);
  };

  return (
    <View style={CartItemStyles.container}>
      <Image
        style={CartItemStyles.image}
        height={100}
        resizeMode="contain"
        width={100}
        source={{ uri: cartItem.image }}
      />

      <View style={CartItemStyles.infosContainer}>
        <View style={CartItemStyles.titleContainer}>
          <View>
            <Text fontSize={16}>{cartItem.name}</Text>
            <Text fontSize={12}>{cartItem.shop.name}</Text>
          </View>
          <Text fontSize={10} numberOfLines={2}>
            {joinIngredientsName({ ingredients: cartItem.ingredients })}
          </Text>
        </View>

        <View style={CartItemStyles.priceContainer}>
          <Text>{convertToBRLCurrency(cartItem.subtotal)}</Text>
          <View style={CartItemStyles.priceButtonsContainer}>
            {cartItem.quantity < 1}
            <TouchableOpacity
              disabled={cartItem.quantity <= 1}
              onPress={handleDecrementCart}
              style={CartItemStyles.priceButtons}>
              <Text fontSize={16}>-</Text>
            </TouchableOpacity>
            <Text fontSize={16}>{cartItem.quantity}</Text>
            <TouchableOpacity
              onPress={handleAddCart}
              style={CartItemStyles.priceButtons}>
              <Text fontSize={16}>+</Text>
            </TouchableOpacity>
          </View>
          <Button
            onPress={handleRemoveCart}
            label={<Text underline>remover</Text>}
          />
        </View>
      </View>
    </View>
  );
};
