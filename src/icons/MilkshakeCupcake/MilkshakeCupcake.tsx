import { Image } from 'react-native';
import { MilkshakeCupcakeStyles } from './MilkshakeCupcakeStyles';

export const MilkshakeCupcake = () => {
  return (
    <Image
      style={MilkshakeCupcakeStyles.image}
      resizeMode="contain"
      source={require('./milkshake-cupcake.png')}
    />
  );
};
