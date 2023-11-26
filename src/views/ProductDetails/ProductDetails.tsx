import { View, ScrollView } from 'react-native';
import { ProductDetailsStyles } from './ProductDetailsStyles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Store } from '../../store';
import { ProductDescription } from './ProductDescription/ProductDescription';
import { ProductIngredients } from './ProductIngredients/ProductIngredients';
import { ShopDetails } from './ShopDetails/ShopDetails';
import { ProductCard } from './ProductCard/ProductCard';
import { WithStateHandler } from '../../hoc/WithStateHandler/WithStateHandler';
import { CartSnackBar } from '../../components/CartSnackBar/CartSnackBar';
import { STACK_SCREENS } from '../../navigation/constants';

export interface ProductDetailsParams {
  shopId: string;
  id: string;
}

export const ProductDetails = () => {
  const route = useRoute();
  const { id } = route.params as ProductDetailsParams;

  const { navigate } = useNavigation();
  const handleScreen = () => {
    navigate(STACK_SCREENS.CART as never);
  };

  const {
    products,
    controls: { error, loading },
  } = useSelector(({ productsReducer }: Store) => productsReducer);

  const selectedProduct = products.find(product => product.id === id);

  return (
    <>
      <ScrollView>
        <WithStateHandler
          {...{ error, loading }}
          isEmptyData={!selectedProduct}>
          <View style={ProductDetailsStyles.container}>
            <ProductCard product={selectedProduct} />
            <ShopDetails shop={selectedProduct.shop} />
            <ProductIngredients ingredients={selectedProduct.ingredients} />
            <ProductDescription description={selectedProduct.description} />
          </View>
        </WithStateHandler>
      </ScrollView>
      <CartSnackBar actionButtonHandler={handleScreen} />
    </>
  );
};
