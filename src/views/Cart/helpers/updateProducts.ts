import { CartProduct } from '../store/reducer/cartReducer';

export enum Operation {
  INCREMENT = '1',
  DECREMENT = '-1',
}

export const updateProducts = ({
  products,
  id,
  operation,
}: {
  products: CartProduct[];
  id: string;
  operation: Operation;
}) => {
  const updatedTotal = {
    price: 0,
    quantity: Number(operation),
  };

  const updatedProducts = products.map(productItem => {
    if (id === productItem.id) {

      updatedTotal.price = productItem.price * Number(operation);
      const updatedQuantity = productItem.quantity + Number(operation);

      return {
        ...productItem,
        quantity: updatedQuantity,
        subtotal: updatedQuantity * productItem.price,
      };
    } else {
      return productItem;
    }
  });

  return { updatedTotal, updatedProducts };
};
