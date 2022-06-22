import * as React from 'react';
import { Provider } from 'react-redux';
import Router from './navigation';
import store from './store';
import AppStateProvider from './providers/AppStateProvider';
import ConnectionProvider from './providers/ConnectionProvider';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppStateProvider>
        <ConnectionProvider>
          <Router />
        </ConnectionProvider>
      </AppStateProvider>
    </Provider>
  );
};

export default App;
