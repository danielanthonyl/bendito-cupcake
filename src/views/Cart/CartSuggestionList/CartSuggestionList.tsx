import { View, ScrollView } from 'react-native';
import { Text } from '../../../components/Text/Text';
import { CartSuggestionListStyles } from './CartSuggestionListStyle';
import { useSelector } from 'react-redux';
import { Store } from '../../../store';
import { getProductListByCategory } from '../../Home/ProductList/helpers/getProductListByCategory';
import { CartSuggestionItem } from './CartSuggestionItem/CartSuggestionItem';

export const CartSuggestionList = () => {
  const { products } = useSelector((store: Store) => store.productsReducer);
  //debt: change to userSuggestion
  const { frequentlyAsked } = getProductListByCategory(products);

  return (
    <View style={CartSuggestionListStyles.wrapper}>
      <Text fontSize={16} style={CartSuggestionListStyles.title}>
        Relacionados ao que você pediu
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={CartSuggestionListStyles.container}>
          {frequentlyAsked.map(suggestion => (
            <CartSuggestionItem key={suggestion.id} product={suggestion} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
