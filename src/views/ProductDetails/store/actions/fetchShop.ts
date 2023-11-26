import { Dispatch } from 'redux';
import { SHOP_TYPES } from '../constants/shopConstants';
import { fetchShopApi } from '../../service/fetchShop';

export const fetchShop = (storeId: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: SHOP_TYPES.FETCH_SHOP_LIST,
      payload: {
        controls: {
          loading: true,
          error: null,
        },
      },
    });

    const storeItem = await fetchShopApi(storeId);

    dispatch({
      type: SHOP_TYPES.FETCH_SHOP_LIST,
      payload: {
        storeItem,
        controls: {
          loading: false,
          error: null,
        },
      },
    });
  } catch (error) {
    const { message } = error as { message: string };

    dispatch({
      type: SHOP_TYPES.FETCH_SHOP_LIST,
      payload: {
        controls: {
          loading: false,
          error: message,
        },
      },
    });
  }
};
