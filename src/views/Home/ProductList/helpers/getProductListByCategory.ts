import { Product } from '../store/reducer/productsReducer';

export const getProductListByCategory = (productList: Product[]) => {
  const frequentlyAsked: Product[] = [];
  const userSuggestions: Product[] = [];

  productList.forEach(product => {
    if (product.category === 'frequentlyAsked') {
      return frequentlyAsked.push(product);
    }
    if (product.category === 'userSuggestions') {
      return userSuggestions.push(product);
    }
  });

  return {
    frequentlyAsked,
    userSuggestions,
  };
};
