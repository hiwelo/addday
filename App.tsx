import { AppLoading } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { Persistor } from 'redux-persist/es/types';
import { PersistGate } from 'redux-persist/integration/react';
import * as Sentry from 'sentry-expo';

import CoreApp from './src/CoreApp';
import sentryConfig from './src/config/sentry';
import { getEncryptionKey } from './src/modules/encryption';
import { initializeStore } from './src/modules/store';

const App: React.FC = () => {
  const [encryptionKey, setEncryptionKey] = React.useState<string | undefined>(
    undefined,
  );
  const [store, setStore] = React.useState<Store | undefined>(undefined);
  const [persistor, setPersistor] = React.useState<Persistor | undefined>(
    undefined,
  );

  /**
   * This effect aims to get the current encryption key from the SecureStore
   * or to generate a new one if not existing
   */
  React.useEffect(() => {
    (async () => {
      try {
        setEncryptionKey(await getEncryptionKey());
      } catch (error) {
        throw new Error(`Error during encryption key initialization: ${error}`);
      }
    })();
  }, []);

  /**
   * This effect aims to initialize the store using the generated encryption key
   * once set
   */
  React.useEffect(() => {
    if (!encryptionKey) return;

    const {
      persistor: generatedPersistor,
      store: generatedStore,
    } = initializeStore({ secretKey: encryptionKey });

    setStore(generatedStore);
    setPersistor(generatedPersistor);
  }, [encryptionKey]);

  /**
   * This effect aims to initialize the Sentry SDK depending on the enrollment
   * of the user
   */
  React.useEffect(() => {
    if (!store) return;

    // Fetches the enrollment to Sentry
    const { getState } = store;
    const { config } = getState();
    const { sentryEnrollment } = config;

    // Early-termination if the user did not enrolled
    if (!sentryEnrollment) return;

    // Initializes Sentry, if the user is enrolled
    Sentry.init(sentryConfig);
  }, [store]);

  /** Renders the loading screen while the store is being initialized */
  if (!encryptionKey || !store || !persistor) return <AppLoading />;

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor as any}>
        <CoreApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
