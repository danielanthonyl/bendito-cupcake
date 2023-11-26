import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from './store/actions/fetchProductList';
import { Store } from '../../../store';
import { WithStateHandler } from '../../../hoc/WithStateHandler/WithStateHandler';
import { UserSuggestions } from './UserSuggestions/UserSuggestions';
import { FrequentlyAsked } from './FrequentlyAsked/FrequentlyAsked';
import { getProductListByCategory } from './helpers/getProductListByCategory';
import { useCallback } from 'react';

export const ProductList = () => {
  const dispatch = useDispatch();

  const {
    products,
    controls: { error, loading },
  } = useSelector((store: Store) => {
    return store.productsReducer;
  });

  const { frequentlyAsked, userSuggestions } =
    getProductListByCategory(products);

  const asyncCallHandler = useCallback(() => {
    dispatch(fetchProductList as any);
  }, [dispatch]);

  return (
    <WithStateHandler
      {...{ error, loading, asyncCallHandler }}
      isEmptyData={products.length <= 0}
      emptyDataMessage="Não conseguimos carregar a lista de produtos. Por favor, atualize o aplicativo e tente novamente.">
      <View>
        <UserSuggestions {...{ userSuggestions }} />
        <FrequentlyAsked {...{ frequentlyAsked }} />
      </View>
    </WithStateHandler>
  );
};
