export const getMessageDelivery = (price: number) =>
  price > 0 ? 'Frete grátis' : 'Frete incluso';

export const getItemPerQuantity = (quantity: number) =>
  quantity > 1 ? ' items' : ' item';
