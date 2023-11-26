import { Star, Storefront } from 'phosphor-react-native';
import { View } from 'react-native';
import { Text } from '../../../components/Text/Text';
import { Shop } from '../store/reducer/shopList';
import { Button } from '../../../components/Button/Button';
import { ShopDetailsStyles } from './ShopDetailsStyles';

export const ShopDetails = ({ shop }: { shop: Shop }) => {
  return (
    <View style={ShopDetailsStyles.container}>
      <View style={ShopDetailsStyles.textImageContainer}>
        <Storefront size={94} />
        <View>
          <Text fontSize={20} style={ShopDetailsStyles.name}>
            {shop.name}
          </Text>
          <Text fontSize={16}>{shop.address}</Text>
          <Text fontSize={16}>{shop.phone}</Text>
        </View>
      </View>
      <View style={ShopDetailsStyles.ratingContainer}>
        <View style={ShopDetailsStyles.ratingTextContainer}>
          <Text fontSize={18}>{shop.rating}</Text>
          <Text fontSize={6}>{shop.votes} avaliações</Text>
        </View>
        <Button label={<Star size={32} />} />
      </View>
    </View>
  );
};
