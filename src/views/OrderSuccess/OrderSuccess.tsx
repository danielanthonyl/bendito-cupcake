import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../components/Text/Text';
import { useNavigation } from '@react-navigation/native';
import { STACK_SCREENS } from '../../navigation/constants';
import { Colors } from '../../constants/colors';
import { CheckCircle } from 'phosphor-react-native';
import { OrderSuccessStyles } from './OrderSuccessStyles';
import { useDispatch } from 'react-redux';
import { cartRemoveAllProduct } from '../Cart/store/actions/cartRemoveAllProduct';

export const OrderSuccess = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const goToProductList = () => {
    dispatch(cartRemoveAllProduct());
    navigate(STACK_SCREENS.HOME as never);
  };

  return (
    <View style={OrderSuccessStyles.container}>
      <Text fontSize={28} style={OrderSuccessStyles.title}>
        Seu pedido foi concluído. Parabéns!
      </Text>
      <Text fontSize={18} style={OrderSuccessStyles.title}>
        Volte à lista de produtos e compre mais!!!
      </Text>
      <CheckCircle
        weight="fill"
        color={Colors.softBlue}
        size={400}
        style={OrderSuccessStyles.svgIcon}
      />

      <View style={OrderSuccessStyles.buttonWrapper}>
        <TouchableOpacity
          onPress={goToProductList}
          style={OrderSuccessStyles.button}>
          <Text style={OrderSuccessStyles.buttonLabel}>Lista de produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
