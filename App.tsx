import { dark as darkTheme, mapping } from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './src/data';

const App: React.FC = () => (
  <ApplicationProvider mapping={mapping} theme={darkTheme}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Text>Hello World!</Text>
      </PersistGate>
    </Provider>
  </ApplicationProvider>
);

export default App;
