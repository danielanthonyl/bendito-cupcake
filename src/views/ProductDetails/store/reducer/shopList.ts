import { SHOP_TYPES } from '../constants/shopConstants';

export interface Shop {
  address: string;
  name: string;
  phone: string;
  rating: string;
  votes: string;
  id: string;
}

export interface ShopReducer {
  shop: Shop;
  controls: {
    loading: boolean;
    error: null | string;
  };
}

const initialState: ShopReducer = {
  shop: null,
  controls: {
    loading: false,
    error: null,
  },
};

export const shopReducer = (
  state = initialState,
  action: any,
): ShopReducer => {
  switch (action.type) {
    case SHOP_TYPES.FETCH_SHOP_LIST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
