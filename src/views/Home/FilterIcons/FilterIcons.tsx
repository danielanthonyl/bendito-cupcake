import { TouchableOpacity, View } from 'react-native';
import { Cupcake } from '../../../icons/Cupcake/Cupcake';
import { Milkshake } from '../../../icons/Milkshake/Milkshake';
import { MilkshakeCupcake } from '../../../icons/MilkshakeCupcake/MilkshakeCupcake';
import { Promotion } from '../../../icons/Promotion/Promotion';
import { FilterIconsStyles } from './FilterIconsStyles';
import { Text } from '../../../components/Text/Text';

export const FilterIcons = () => {
  return (
    <View style={FilterIconsStyles.container}>
      <TouchableOpacity style={FilterIconsStyles.itemContainer}>
        <Cupcake />
        <Text>Cupcakes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={FilterIconsStyles.itemContainer}>
        <Milkshake />
        <Text>Sucos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={FilterIconsStyles.itemContainer}>
        <MilkshakeCupcake />
        <Text>Mix</Text>
      </TouchableOpacity>

      <TouchableOpacity style={FilterIconsStyles.itemContainer}>
        <Promotion />
        <Text fontSize={16}>Promo</Text>
      </TouchableOpacity>
    </View>
  );
};
