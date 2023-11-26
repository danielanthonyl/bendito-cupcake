import { View } from 'react-native';
import { Text } from '../../../../components/Text/Text';
import type { Product as ProductType } from '../store/reducer/productsReducer';
import { UserSuggestionStyles } from './UserSuggestionsStyles';
import { Product } from '../Product/Product';

export interface UserSuggestionsProps {
  userSuggestions: ProductType[];
}
export const UserSuggestions = ({ userSuggestions }: UserSuggestionsProps) =>
  userSuggestions.length > 0 ? (
    <>
      <Text style={UserSuggestionStyles.title} fontSize={16}>
        Baseado no que pediu
      </Text>

      <View style={UserSuggestionStyles.listContainer}>
        {userSuggestions.map(productItem => {
          return <Product key={productItem.id} {...productItem} />;
        })}
      </View>
    </>
  ) : null;
