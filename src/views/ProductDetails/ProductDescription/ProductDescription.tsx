import { View } from 'react-native';
import { Text } from '../../../components/Text/Text';
import { ProductDetailsStyles } from '../ProductDetailsStyles';
import { ProductDescriptionStyles } from './ProductDescriptionStyles';

export const ProductDescription = ({ description }: { description: string }) => {
  return (
    <View>
      <Text fontSize={24} style={ProductDetailsStyles.title}>
        Detalhes
      </Text>
      <Text style={ProductDescriptionStyles.text}>{description}</Text>
    </View>
  );
};
