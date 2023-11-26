import { Image } from 'react-native';
import { MilkshakeStyles } from './MilkshakeStyles';

export const Milkshake = () => {
  return (
    <Image
      style={MilkshakeStyles.image}
      resizeMode="contain"
      source={require('./milkshake.png')}
    />
  );
};
