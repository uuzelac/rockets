import * as React from 'react';
import { Provider } from 'react-redux';
import Router from './navigation';
import store from './store';

const App = (): JSX.Element => {
  return (
      <Provider store={store}>
        <Router />
      </Provider>
  );
};

export default App;
