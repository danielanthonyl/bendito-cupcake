import { Image } from 'react-native';
import { CupcakeStyles } from './CupcakeStyles';

export const Cupcake = () => {
  return (
    <Image
      style={CupcakeStyles.image}
      resizeMode="contain"
      source={require('./cupcake.png')}
    />
  );
};
