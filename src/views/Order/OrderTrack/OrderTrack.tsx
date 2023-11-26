import { View, Image } from 'react-native';
import { Text } from '../../../components/Text/Text';
import { ChatTeardropText } from 'phosphor-react-native';
import { OrderTrackStyles } from './OrderTrackStyles';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { STACK_SCREENS } from '../../../navigation/constants';
const MAP_IMAGE =
  'https://firebasestorage.googleapis.com/v0/b/cupcake-store-2a166.appspot.com/o/image%204.png?alt=media&token=27b61ccb-6cf9-4584-a53e-7b31d8eb034f';

export const OrderTrack = () => {
  const [timer, setTimer] = useState(6);
  const { navigate } = useNavigation();

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(prevTime => prevTime - 1);
      } else {
        clearInterval(timerInterval);
        navigate(STACK_SCREENS.ORDER_SUCCESS as never);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, navigate]);

  return (
    <View style={OrderTrackStyles.wrapper}>
      <Text fontSize={18}>Previsão de entrega: {timer}s</Text>
      <Text fontSize={12}>o seu pedido está indo até você</Text>

      <Image
        style={OrderTrackStyles.image}
        resizeMode="contain"
        source={{
          uri: MAP_IMAGE,
        }}
      />
      <View style={OrderTrackStyles.imageFooter}>
        <ChatTeardropText />
        <Text> Falar com a loja</Text>
      </View>
    </View>
  );
};
