import { Shop } from '../../../../ProductDetails/store/reducer/shopList';
import { PRODUCT_TYPES } from '../constants/productListConstants';

export interface Ingredient {
  id: string;
  productId: string;
  portionQuantity: string;
  name: string;
  value: number;
}

export interface Product {
  id: string;
  category: 'frequentlyAsked' | 'userSuggestions';
  description: string;
  image: string;
  ingredients: Ingredient[];
  name: string;
  price: number;
  shortDescription: string;
  shop: Shop;
  type: 'cupcake' | 'drink' | 'mix';
  onSale: boolean;
  deliveryPrice: number;
}

export interface ProductsReducer {
  products: Product[];
  controls: {
    loading: boolean;
    error: null | string;
  };
}

const initialState: ProductsReducer = {
  products: [],
  controls: {
    loading: false,
    error: null,
  },
};

export const productsReducer = (
  state = initialState,
  action: { type: string; payload: any },
): ProductsReducer => {
  switch (action.type) {
    case PRODUCT_TYPES.FETCH_PRODUCT_LIST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
