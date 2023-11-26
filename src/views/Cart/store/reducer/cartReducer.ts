import { Product } from '../../../Home/ProductList/store/reducer/productsReducer';
import { CART_TYPES } from '../constants/cartConstants';

export interface CartProduct extends Product {
  subtotal: number;
  quantity: number;
}

export interface CartReducer {
  products: CartProduct[];
  total: {
    price: number;
    quantity: number;
    deliveryPrice: number;
  };
  controls: {
    error: null | string;
    loading: boolean;
  };
}

const initialState: CartReducer = {
  products: [],
  total: {
    price: 0,
    quantity: 0,
    deliveryPrice: 0,
  },
  controls: {
    error: null,
    loading: false,
  },
};

export const cartReducer = (
  state = initialState,
  action: { type: string; payload: any },
): CartReducer => {
  switch (action.type) {
    case CART_TYPES.REMOVE_ALL_PRODUCT_CART:
      return initialState;

    case CART_TYPES.REMOVE_PRODUCT_CART:
      return {
        ...state,
        products: action.payload.products,
        total: action.payload.total,
        controls: {
          error: null,
          loading: false,
        },
      };
    case CART_TYPES.CREATE_PRODUCT_CART:
      return {
        ...state,
        products: [...state.products, action.payload.product],
        total: {
          price: state.total.price + action.payload.product.price,
          deliveryPrice:
            state.total.deliveryPrice + action.payload.product.deliveryPrice,
          quantity: state.total.quantity + 1,
        },
        controls: {
          error: null,
          loading: false,
        },
      };
    case CART_TYPES.UPDATE_PRODUCT_CART:
      return {
        ...state,
        products: action.payload.products,
        total: {
          ...state.total,
          price: state.total.price + action.payload.total.price,
          quantity: state.total.quantity + action.payload.total.quantity,
        },
        controls: {
          error: null,
          loading: false,
        },
      };
    default:
      return state;
  }
};
