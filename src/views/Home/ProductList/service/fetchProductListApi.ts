import { collection, getDocs } from 'firebase/firestore';
import { Ingredient, Product } from '../store/reducer/productsReducer';
import { database } from '../../../../services';
import { Shop } from '../../../ProductDetails/store/reducer/shopList';

export const fetchProductListApi = async () => {
  try {
    const productsCollection = collection(database, 'products');
    const ingredientsCollection = collection(database, 'ingredients');
    const shopCollection = collection(database, 'stores');

    const snapshotProducts = await getDocs(productsCollection);
    const snapshotIngredients = await getDocs(ingredientsCollection);
    const snapshotShop = await getDocs(shopCollection);

    const productList: Product[] = [];
    const ingredientsList: Ingredient[] = [];
    const shopList: Shop[] = [];

    snapshotIngredients.forEach(doc => {
      ingredientsList.push({ ...doc.data(), id: doc.id } as Ingredient);
    });

    snapshotShop.forEach(doc => {
      shopList.push({ ...doc.data(), id: doc.id } as Shop);
    });

    snapshotProducts.forEach(doc => {
      const ingredients = ingredientsList.filter(
        ingredient => ingredient.productId === doc.id,
      );

      const shop = shopList.find(
        shopItem => shopItem.id === (doc.data().storeId as string),
      );

      productList.push({
        ...doc.data(),
        id: doc.id,
        shop,
        ingredients,
      } as Product);
    });

    return productList;
  } catch (error) {
    const { message } = error as { message: string };
    throw new Error(message);
  }
};
