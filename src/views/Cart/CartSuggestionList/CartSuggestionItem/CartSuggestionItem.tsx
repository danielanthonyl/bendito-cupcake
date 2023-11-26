import { TouchableOpacity, View, Image } from 'react-native';
import { Text } from '../../../../components/Text/Text';
import { CartSuggestionItemStyles } from './CartSuggestionItemStyles';
import { Product } from '../../../Home/ProductList/store/reducer/productsReducer';
import { convertToBRLCurrency } from '../../../../helpers/convertToBRLCurrency';
import { cartAddProduct } from '../../store/actions/cartAddProduct';
import { useDispatch } from 'react-redux';

export const CartSuggestionItem = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  const handleAddCart = () => {
    dispatch(cartAddProduct({ id: product.id }) as any);
  };
  return (
    <View style={CartSuggestionItemStyles.container}>
      <Text fontSize={16}>{product.name}</Text>

      <Image
        source={{ uri: product.image }}
        resizeMode="contain"
        width={66}
        height={66}
        borderRadius={18}
      />

      <Text>{convertToBRLCurrency(product.price)}</Text>
      <TouchableOpacity onPress={handleAddCart} style={CartSuggestionItemStyles.addButton}>
        <Text fontSize={16}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};
