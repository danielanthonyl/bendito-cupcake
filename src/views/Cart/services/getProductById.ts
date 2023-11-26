import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { database } from '../../../services';
import {
  IngredientItem,
  ProductItem,
} from '../../Home/ProductList/store/reducer/productsReducer';

export const getProductById = async ({ id }: Pick<ProductItem,'id'> ) => {
  try {
    const productRef = doc(database, 'products', id);
    const ingredientsCollection = collection(database, 'ingredients');

    const snapshotProduct = await getDoc(productRef);
    const snapshotIngredients = await getDocs(ingredientsCollection);

    if (!snapshotProduct.exists()) {
      throw new Error('Product does not exist');
    }

    const product = {
      ...snapshotProduct.data(),
      id: snapshotProduct.id,
    } as ProductItem;
    const ingredients: IngredientItem[] = [];

    snapshotIngredients.forEach(document => {
      ingredients.push({
        ...document.data(),
        id: document.id,
      } as IngredientItem);

      product.ingredients = ingredients.filter(
        ingredient => ingredient.productId === id,
      );
    });
    return product;
  } catch (error) {
    const { message } = error as { message: string };
    throw new Error(message);
  }
};
