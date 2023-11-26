import { CART_SNACK_BAR_TYPES } from '../../constants/cartSnackBarConstants';

export interface CartSnackBarReducer {
  cartData: {
    itemQuantity: number;
    totalPrice: string;
    deliveryPrice: string;
  };
}

const initialState: CartSnackBarReducer = {
  cartData: {
    itemQuantity: 0,
    totalPrice: '0',
    deliveryPrice: '0',
  },
};

export const cartSnackBarReducer = (
  state = initialState,
  action: any,
): CartSnackBarReducer => {
  switch (action.type) {
    case CART_SNACK_BAR_TYPES.CART_SNACK_BAR_ADD_PRODUCT:
      return {
        ...state,
        cartData: {
          itemQuantity: state.cartData.itemQuantity + 1,
          totalPrice: Number(Number(state.cartData.totalPrice) + action.payload.price + action.payload.deliveryPrice).toFixed(2),
          deliveryPrice:
            Number(Number(state.cartData.deliveryPrice) + action.payload.deliveryPrice).toFixed(2),
        },
      };
    default:
      return state;
  }
};
