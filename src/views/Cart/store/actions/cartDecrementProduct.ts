import { Store } from '../../../../store';
import { Operation, updateProducts } from '../../helpers/updateProducts';
import { CART_TYPES } from '../constants/cartConstants';
import { CartProduct } from '../reducer/cartReducer';

export const cartDecrementProduct =
  ({ cartProduct }: { cartProduct: CartProduct }) =>
  (dispatch: any, getState: any) => {
    const store: Store = getState();
    const cartProducts = store.cartReducer.products;

    const {updatedTotal, updatedProducts} = updateProducts({products: cartProducts, id: cartProduct.id, operation: Operation.DECREMENT});

    dispatch({
      type: CART_TYPES.UPDATE_PRODUCT_CART,
      payload: {
        products: updatedProducts,
        total: updatedTotal,
      },
    });
  };
