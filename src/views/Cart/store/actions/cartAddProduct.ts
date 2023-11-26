import { Store } from '../../../../store';
import { Operation, updateProducts } from '../../helpers/updateProducts';
import { CART_TYPES } from '../constants/cartConstants';
import { CartProduct } from '../reducer/cartReducer';

export const cartAddProduct =
  ({ id }: Pick<CartProduct, 'id'>) =>
  (dispatch: any, getState: any) => {
    const store: Store = getState();

    const product = store.productsReducer.products.find(
      productItem => id === productItem.id,
    );

    const foundProduct = store.cartReducer.products.find(productItem => {
      return id === productItem.id;
    });

    if (!foundProduct) {
      dispatch({
        type: CART_TYPES.CREATE_PRODUCT_CART,
        payload: {
          product: {
            ...product,
            quantity: 1,
            subtotal: product.price,
          },
        },
      });
    } else {

      const {updatedTotal, updatedProducts} = updateProducts({ products: store.cartReducer.products, id: product.id, operation: Operation.INCREMENT });

      dispatch({
        type: CART_TYPES.UPDATE_PRODUCT_CART,
        payload: {
          products: updatedProducts,
          total: updatedTotal,
        },
      });
    }
  };
