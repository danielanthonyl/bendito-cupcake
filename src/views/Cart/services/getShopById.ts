import { doc, getDoc } from 'firebase/firestore';
import { database } from '../../../services';
import { Shop } from '../../ProductDetails/store/reducer/shopList';

export const getStoreById = async ({ id }: Pick<Shop, 'id'>) => {
  try {
    const storeRef = doc(database, 'stores', id);

    const snapshotStore = await getDoc(storeRef);

    if (!snapshotStore.exists()) {
      throw new Error('Store does not exist');
    }

    const store = {
      ...snapshotStore.data(),
      id: snapshotStore.id,
    } as Shop;
    return store;
  } catch (error) {
    const { message } = error as { message: string };
    throw new Error(message);
  }
};
