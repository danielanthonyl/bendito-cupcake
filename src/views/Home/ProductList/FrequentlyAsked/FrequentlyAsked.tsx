import { Text } from '../../../../components/Text/Text';
import { View } from 'react-native';
import { FrequentlyAskedStyles } from './FrequentlyAskedStyles';
import type { Product as ProductType} from '../store/reducer/productsReducer';
import { Product } from '../Product/Product';

export interface FrequentlyAskedProps {
  frequentlyAsked: ProductType[];
}

export const FrequentlyAsked = ({ frequentlyAsked }: FrequentlyAskedProps) =>
  frequentlyAsked.length > 0 ? (
    <>
      <Text style={FrequentlyAskedStyles.title} fontSize={16}>
        Mais pedidos
      </Text>

      <View style={FrequentlyAskedStyles.listContainer}>
        {frequentlyAsked.map(product => {
          return <Product key={product.id} {...product} />;
        })}
      </View>
    </>
  ) : null;
