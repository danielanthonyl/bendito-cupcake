import { Image, View } from 'react-native';
import { Text } from '../../../components/Text/Text';
import { Product } from '../../Home/ProductList/store/reducer/productsReducer';
import { ProductCardStyles } from './ProductCardStyles';
import { BackButton } from '../../../components/BackButton/BackButton';
import { Button } from '../../../components/Button/Button';
import { ShoppingCart } from 'phosphor-react-native';
import { Colors } from '../../../constants/colors';
import { useDispatch } from 'react-redux';
import { cartSnackBarAddProduct } from '../../../components/CartSnackBar/store/actions/cartSnackBarAddProducts';
import { cartAddProduct } from '../../Cart/store/actions/cartAddProduct';
import { convertToBRLCurrency } from '../../../helpers/convertToBRLCurrency';

export const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  const handleShoppingCart = () => {
    dispatch(
      cartSnackBarAddProduct({
        price: product.price,
        deliveryPrice: product.deliveryPrice,
      }),
    );
    dispatch(cartAddProduct({ id: product.id }) as any);
  };
  return (
    <View style={ProductCardStyles.container}>
      <View style={ProductCardStyles.textHolder}>
        <BackButton />
        <Text fontSize={24}>{product.name}</Text>
      </View>
      <Image
        source={{ uri: product.image }}
        height={220}
        resizeMode="contain"
        width={220}
        borderRadius={100}
      />
      <View style={ProductCardStyles.textHolder}>
        <Text fontSize={20}>{convertToBRLCurrency(product.price)}</Text>
        <Button
          onPress={handleShoppingCart}
          label={<ShoppingCart size={32} color={Colors.wine} />}
        />
      </View>
    </View>
  );
};
