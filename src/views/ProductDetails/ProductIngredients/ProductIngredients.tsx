import { View } from 'react-native';
import { Text } from '../../../components/Text/Text';
import { IngredientItem } from '../../Home/ProductList/store/reducer/productsReducer';
import { ProductIngredientsStyles } from './ProductIngredientsStyles';
import { ProductDetailsStyles } from '../ProductDetailsStyles';

export const ProductIngredients = ({
  ingredients,
}: {
  ingredients: IngredientItem[];
}) => {
  return (
    <View>
      <Text fontSize={24} style={ProductDetailsStyles.title}>
        Ingredientes
      </Text>
      {ingredients.map(ingredient => {
        return (
          <View key={ingredient.id} style={ProductIngredientsStyles.table}>
            <Text fontSize={16} style={ProductIngredientsStyles.name}>
              {ingredient.name}
            </Text>
            <Text fontSize={16}>
              {ingredient.value}
              {ingredient.portionQuantity}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
