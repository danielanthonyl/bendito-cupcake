import { doc, getDoc } from 'firebase/firestore';
import { database } from '../../../services';
import { Shop } from '../store/reducer/shopList';

export const fetchShopApi = async ({id: shopId}: Pick<Shop, 'id'>) => {
  try {
    const shop = (await getDoc(doc(database, 'stores', shopId))).data();

    return shop;
  } catch (error) {
    const { message } = error as { message: string };

    throw new Error(message);
  }
};
