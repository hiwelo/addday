import { dark as darkTheme, mapping } from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as Sentry from 'sentry-expo';

import sentryConfig from './src/config/sentry';
import { getPersistor, getStore } from './src/data/store';

const App: React.FC = () => {
  /** Fetches the persistor and the store */
  const persistor = getPersistor();
  const store = getStore();

  /** Initializes Sentry */
  Sentry.init(sentryConfig);

  return (
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <Provider store={store}>
        <PersistGate persistor={persistor as any}>
          <Text>Hello World!</Text>
        </PersistGate>
      </Provider>
    </ApplicationProvider>
  );
};

export default App;
