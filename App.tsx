import { Provider } from 'react-redux';
import { Navigation } from './src/navigation/Navigation';
import { store } from './src/store';
import { initializeApp } from 'firebase/app';
import configBase from './firebase.json';

export const app = initializeApp(configBase);

export const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
