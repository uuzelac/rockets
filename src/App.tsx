import * as React from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import Router from './navigation';
import store from './store';
import AppStateProvider from './providers/AppStateProvider';
import ConnectionProvider from './providers/ConnectionProvider';

const App = (): JSX.Element => {
  return (
    <>
      <Provider store={store}>
        <AppStateProvider>
          <ConnectionProvider>
            <Router />
          </ConnectionProvider>
        </AppStateProvider>
      </Provider>
      <Toast />
    </>
  );
};

export default App;
