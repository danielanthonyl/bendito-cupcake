import { View, Image, TouchableOpacity } from 'react-native';
import { Heart, ShoppingCart } from 'phosphor-react-native';
import { ProductItemStyles } from './ProductStyles';
import { Text } from '../../../../components/Text/Text';
import { Button } from '../../../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';
import { STACK_SCREENS } from '../../../../navigation/constants';
import { useDispatch } from 'react-redux';
import { cartSnackBarAddProduct } from '../../../../components/CartSnackBar/store/actions/cartSnackBarAddProducts';
import { cartAddProduct } from '../../../Cart/store/actions/cartAddProduct';
import { convertToBRLCurrency } from '../../../../helpers/convertToBRLCurrency';
import { Product as ProductType } from '../store/reducer/productsReducer';

export interface ProductProps extends ProductType {}

export const Product = ({
  price,
  image,
  shortDescription,
  name,
  id,
  deliveryPrice,
}: ProductProps) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const handleProductDetail = () => {
    //@ts-ignore
    navigate(STACK_SCREENS.PRODUCT_DETAILS as never, { id });
  };

  const handleShoppingCart = () => {
    dispatch(cartAddProduct({ id }) as any);
    dispatch(cartSnackBarAddProduct({ price, deliveryPrice }));
  };

  return (
    <TouchableOpacity
      onPress={handleProductDetail}
      style={ProductItemStyles.card}>
      <Text fontSize={18} style={ProductItemStyles.price}>
        {convertToBRLCurrency(price)}
      </Text>
      <Image
        style={ProductItemStyles.image}
        source={{ uri: image }}
        height={100}
        resizeMode="contain"
        width={100}
      />
      <Text fontSize={18}>{name}</Text>
      <Text numberOfLines={1} fontSize={12}>
        {shortDescription}
      </Text>
      <View style={ProductItemStyles.icons}>
        <Button label={<Heart />} />
        <Button onPress={handleShoppingCart} label={<ShoppingCart />} />
      </View>
    </TouchableOpacity>
  );
};
