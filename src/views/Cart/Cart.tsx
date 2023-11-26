import { ScrollView } from 'react-native';
import { CartStyles } from './CartStyles';
import { CartHeader } from './CartHeader/CartHeader';
import { CartItemList } from './CartItemList/CartItemList';
import { CartSuggestionList } from './CartSuggestionList/CartSuggestionList';
import { CartSnackBar } from '../../components/CartSnackBar/CartSnackBar';
import { STACK_SCREENS } from '../../navigation/constants';
import { useNavigation } from '@react-navigation/native';
import {
  UserInfoList,
  userTest,
} from '../../components/UserInfoList/UserInfoList';
import { submitCartData } from './services/submitCartData';
import { useSelector } from 'react-redux';
import { Store } from '../../store';
import { useState } from 'react';
import { WithStateHandler } from '../../hoc/WithStateHandler/WithStateHandler';

export const Cart = () => {
  const { navigate } = useNavigation();
  const [apiState, setApiState] = useState({ error: null, loading: false });

  const { products } = useSelector(({ cartReducer }: Store) => {
    return cartReducer;
  });

  const handleScreen = async () => {
    setApiState({ error: null, loading: true });
    try {
      await submitCartData({ products });
      setApiState({ error: null, loading: false });
      navigate(STACK_SCREENS.ORDER as never);
    } catch (error) {
      setApiState({ error, loading: false });
    }
  };

  return (
    <WithStateHandler error={apiState.error} loading={apiState.loading}>
      <ScrollView style={CartStyles.wrapper}>
        <CartHeader />
        <CartItemList />
        <CartSuggestionList />
        <UserInfoList
          user={userTest}
          editMode
          containerStyle={CartStyles.footerMargin}
        />
      </ScrollView>
      <CartSnackBar
        actionButtonLabel={'Fazer Pedido'}
        actionButtonHandler={handleScreen}
      />
    </WithStateHandler>
  );
};
