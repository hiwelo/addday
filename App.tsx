import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as Sentry from 'sentry-expo';

import CoreApp from './src/CoreApp';
import sentryConfig from './src/config/sentry';
import { getPersistor, getState, getStore } from './src/data/store';

const App: React.FC = () => {
  /** Fetches the persistor and the store */
  const persistor = getPersistor();
  const store = getStore();
  const { config } = getState();
  const { sentryEnrollment } = config;

  /** Initializes Sentry, if the user enrolled themselves for it */
  if (sentryEnrollment) Sentry.init(sentryConfig);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor as any}>
        <CoreApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
