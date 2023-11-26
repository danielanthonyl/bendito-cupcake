import { Dispatch } from 'redux';
import { fetchProductListApi } from '../../service/fetchProductListApi';
import { PRODUCT_TYPES } from '../constants/productListConstants';

export const fetchProductList = async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: PRODUCT_TYPES.FETCH_PRODUCT_LIST,
      payload: {
        controls: {
          error: null,
          loading: true,
        },
      },
    });

    const products = await fetchProductListApi();

    dispatch({
      type: PRODUCT_TYPES.FETCH_PRODUCT_LIST,
      payload: {
        products,
        controls: {
          error: null,
          loading: false,
        },
      },
    });
  } catch (error) {
    const { message } = error as { message: string };

    dispatch({
      type: PRODUCT_TYPES.FETCH_PRODUCT_LIST,
      payload: {
        controls: {
          error: message,
          loading: false,
        },
      },
    });
  }
};
