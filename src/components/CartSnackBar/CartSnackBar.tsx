import { View } from 'react-native';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { CartSnackBarStyles } from './CartSnackBarStyles';
import { useSelector } from 'react-redux';
import { Store } from '../../store';
import {
  getItemPerQuantity,
  getMessageDelivery,
} from './helpers/helpers';
import { convertToBRLCurrency } from '../../helpers/convertToBRLCurrency';

export interface CartSnackBarProps {
  actionButtonLabel?: string;
  actionButtonHandler?(): void;
}

export const CartSnackBar = ({
  actionButtonLabel = 'Ver carrinho',
  actionButtonHandler,
}: CartSnackBarProps) => {
  const cartData = useSelector(
    (store: Store) => store.cartReducer,
  );

  const shouldShow = cartData.total.quantity > 0;

  const itemPerQuantity = getItemPerQuantity(
    cartData.total.quantity,
  );

  const brlCurrency = convertToBRLCurrency(
    cartData.total.price,
  );

  const delivery = getMessageDelivery(
    Number(cartData.total.deliveryPrice),
  );

  return shouldShow ? (
    <View style={CartSnackBarStyles.wrapper}>
      <View style={CartSnackBarStyles.container}>
        <View>
          <Text fontSize={18}>
            {cartData.total.quantity}
            {itemPerQuantity} | {brlCurrency}
          </Text>
          <Text fontSize={12}>{delivery}</Text>
        </View>

        <View style={CartSnackBarStyles.info}>
          <Button
          onPress={actionButtonHandler}
            label={
              <Text fontSize={16} underline>
                {actionButtonLabel}
              </Text>
            }
          />
        </View>
      </View>
    </View>
  ) : null;
};
