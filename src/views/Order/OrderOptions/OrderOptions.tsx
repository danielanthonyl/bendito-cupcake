import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../../components/Text/Text';
import { OrderOptionsStyles } from './OrderOptionsStyles';

export const OrderOptions = () => {
  return (
    <View style={OrderOptionsStyles.wrapper}>
      <TouchableOpacity style={OrderOptionsStyles.container}>
        <Text>Cancelar pedido</Text>
      </TouchableOpacity>
      <TouchableOpacity style={OrderOptionsStyles.container}>
        <Text>Reportar Erro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={OrderOptionsStyles.container}>
        <Text>Ajuda</Text>
      </TouchableOpacity>
    </View>
  );
};
