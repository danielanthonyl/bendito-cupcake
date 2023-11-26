import { Product } from '../../../../views/Home/ProductList/store/reducer/productsReducer';
import { CART_SNACK_BAR_TYPES } from '../../constants/CartSnackBarConstants';

export const cartSnackBarAddProduct = ({
  price,
  deliveryPrice,
}: Pick<Product, 'price' | 'deliveryPrice'>) => ({
  type: CART_SNACK_BAR_TYPES.CART_SNACK_BAR_ADD_PRODUCT,
  payload: {
    price,
    deliveryPrice,
  },
});
