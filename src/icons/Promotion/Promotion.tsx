import { Image } from 'react-native';
import { PromotionStyles } from './PromotionStyles';

export const Promotion = () => {
  return (
    <Image
      source={require('./promotion.png')}
      resizeMode="contain"
      style={PromotionStyles.image}
    />
  );
};
