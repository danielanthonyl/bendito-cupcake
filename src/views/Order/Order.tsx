import { ScrollView } from 'react-native';
import { CartSnackBar } from '../../components/CartSnackBar/CartSnackBar';
import { OrderList } from './OrderList/OrderList';
import { OrderStyles } from './OrderStyles';
import { OrderTrack } from './OrderTrack/OrderTrack';
import { useNavigation } from '@react-navigation/native';
import { STACK_SCREENS } from '../../navigation/constants';
import {
  UserInfoList,
  userTest,
} from '../../components/UserInfoList/UserInfoList';
import { OrderOptions } from './OrderOptions/OrderOptions';

export const Order = () => {
  const { navigate } = useNavigation();
  const handleScreen = () => {
    navigate(STACK_SCREENS.HOME as never);
  };

  return (
    <>
      <ScrollView style={OrderStyles.wrapper}>
        <OrderTrack />
        <OrderList />
        <UserInfoList user={userTest} />
        <OrderOptions />
      </ScrollView>
      <CartSnackBar
        actionButtonLabel={'Procurar Produtos'}
        actionButtonHandler={handleScreen}
      />
    </>
  );
};
