import { View, TouchableOpacity } from 'react-native';
import { BackButton } from '../../../components/BackButton/BackButton';
import { CartHeaderStyles } from './CartHeaderStyles';
import { Text } from '../../../components/Text/Text';

export const CartHeader = () => {
  return (
    <View style={CartHeaderStyles.wrapper}>
      <View style={CartHeaderStyles.backContainer}>
        <BackButton />
      </View>
      <View style={CartHeaderStyles.buttonsContainer}>

        <TouchableOpacity style={CartHeaderStyles.buttons}>
          <Text fontSize={16} style={{ color: 'black' }}>
            Carrinho
          </Text>
          <View style={[CartHeaderStyles.buttonLine, {backgroundColor: 'black'} ]}/>
        </TouchableOpacity>

        <TouchableOpacity disabled style={CartHeaderStyles.buttons}>
          <Text fontSize={16}>Historico</Text>
          <View style={CartHeaderStyles.buttonLine}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
