import { CartProduct } from '../reducer/cartReducer';
import { CART_TYPES } from '../constants/cartConstants';
import { Store } from '../../../../store';

export const cartRemoveProduct =
  ({ cartProduct }: { cartProduct: CartProduct }) =>
  (dispatch: any, getState: any) => {
    const store: Store = getState();
    const { products, total } = store.cartReducer;

    const updatedTotal = {
      price: total.price - cartProduct.subtotal,
      deliveryPrice: total.deliveryPrice - cartProduct.deliveryPrice,
      quantity: total.quantity - cartProduct.quantity,
    };

    dispatch({
      type: CART_TYPES.REMOVE_PRODUCT_CART,
      payload: {
        products: [
          ...products.filter(productItem => cartProduct.id !== productItem.id),
        ],
        total: updatedTotal,
      },
    });
  };
