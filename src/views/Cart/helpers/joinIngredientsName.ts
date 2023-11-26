import { Ingredient } from '../../Home/ProductList/store/reducer/productsReducer';

export const joinIngredientsName = ({
  ingredients,
}: {
  ingredients: Ingredient[];
}) => {
  if (ingredients.length < 1) {
    return ' ';
  }
  return ingredients.map(ingredient => ingredient.name).join(', ') + '.';
};
