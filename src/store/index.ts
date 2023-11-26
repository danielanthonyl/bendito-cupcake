import { applyMiddleware, combineReducers, createStore } from 'redux';
import {
  ProductsReducer,
  productsReducer,
} from '../views/Home/ProductList/store/reducer/productsReducer';
import thunk from 'redux-thunk';
import {
  CartReducer,
  cartReducer,
} from '../views/Cart/store/reducer/cartReducer';

export interface Store {
  productsReducer: ProductsReducer;
  cartReducer: CartReducer;
}

const reducer = combineReducers({
  productsReducer,
  cartReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
