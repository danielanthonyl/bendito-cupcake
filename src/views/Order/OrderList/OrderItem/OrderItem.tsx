import { View, Image } from 'react-native';
import { Text } from '../../../../components/Text/Text';
import { CartProduct } from '../../../Cart/store/reducer/cartReducer';
import { joinIngredientsName } from '../../../Cart/helpers/joinIngredientsName';
import { OrderItemStyles } from './OrderItemStyles';

export const OrderItem = ({ cartProduct }: { cartProduct: CartProduct }) => {
  return (
    <View style={OrderItemStyles.wrapper}>
      <View style={OrderItemStyles.container}>
        <View style={OrderItemStyles.titleContainer}>
          <Text fontSize={18}>{cartProduct.name}</Text>
          <Text fontSize={10}>{cartProduct.shop.name}</Text>
          <Text fontSize={10} style={OrderItemStyles.ingredients}>
            {joinIngredientsName({ ingredients: cartProduct.ingredients })}
          </Text>
        </View>
        <Image
          style={OrderItemStyles.image}
          height={100}
          resizeMode="contain"
          width={100}
          source={{ uri: cartProduct.image }}
        />
      </View>
    </View>
  );
};
