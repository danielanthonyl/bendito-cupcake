import { ScrollView, View } from 'react-native';
import { HomeStyles } from './HomeStyles';
import { ProductList } from './ProductList/ProductList';
import { Header } from './Header/Header';
import { FilterIcons } from './FilterIcons/FilterIcons';
import { CartSnackBar } from '../../components/CartSnackBar/CartSnackBar';
import { useNavigation } from '@react-navigation/native';
import { STACK_SCREENS } from '../../navigation/constants';

export const Home = () => {
  const onDrawerPress = () => {};
  const onProfilePress = () => {};
  const onSearch = () => {};
  const { navigate } = useNavigation();
  const handleScreen = () => {
    navigate(STACK_SCREENS.CART as never);
  };

  return (
    <ScrollView contentContainerStyle={HomeStyles.scrollView}>
      <Header {...{ onDrawerPress, onProfilePress, onSearch }} />
      <View style={HomeStyles.container}>
        <FilterIcons />
        <ProductList />
      </View>
      <CartSnackBar actionButtonHandler={handleScreen} />
    </ScrollView>
  );
};
