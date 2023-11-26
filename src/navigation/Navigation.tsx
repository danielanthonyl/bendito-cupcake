import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../views/Home/Home';
import { ProductDetails } from '../views/ProductDetails/ProductDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { STACK_SCREENS } from './constants';
import { Cart } from '../views/Cart/Cart';
import { Order } from '../views/Order/Order';
import { OrderSuccess } from '../views/OrderSuccess/OrderSuccess';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={STACK_SCREENS.HOME}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={STACK_SCREENS.HOME} component={Home} />
        <Stack.Screen
          name={STACK_SCREENS.PRODUCT_DETAILS}
          component={ProductDetails}
        />
        <Stack.Screen name={STACK_SCREENS.CART} component={Cart} />
        <Stack.Screen name={STACK_SCREENS.ORDER} component={Order} />
        <Stack.Screen
          name={STACK_SCREENS.ORDER_SUCCESS}
          component={OrderSuccess}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
