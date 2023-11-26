import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../../services';
import { CartProduct } from '../store/reducer/cartReducer';

export interface SubmitCartDataArgs {
  products: CartProduct[];
}

export const submitCartData = async (orderData: SubmitCartDataArgs) => {
  try {
    const ordersRef = collection(database, 'orders');

    await addDoc(ordersRef, orderData);

    return true;
  } catch (error) {
    const { message } = error as { message: string };

    throw new Error(message);
  }
};
