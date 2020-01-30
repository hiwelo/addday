import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './data';

const App: FunctionComponent = () => (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
    </Provider>
  </>
);

export default App;
