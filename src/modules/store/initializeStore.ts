import { Store, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import createEncryptor from 'redux-persist-transform-encrypt';
import { Persistor } from 'redux-persist/es/types';

import { PERSISTOR_KEY_NAME } from '../../config/store';
import rootReducer from '../../data/reducer';

interface InitializeStoreAttributes {
  secretKey: string;
  persistor?: Persistor;
  store?: Store;
}

function initializeStore({
  persistor: providedPersistor,
  secretKey,
  store: providedStore,
}: InitializeStoreAttributes): { persistor: Persistor; store: Store } {
  // throws error if there is already a store existing
  if (providedStore && providedPersistor) {
    throw new Error('The store is already initialized.');
  }

  /** Encryptor used to encrypt and decrypt the values stored by the persistor */
  const encryptor = createEncryptor({
    onError(error) {
      if (providedPersistor) providedPersistor.purge();

      throw new Error(`Redux Persistor error: ${error}`);
    },
    secretKey,
  });

  /** Configuration to use for the global persistor of this application */
  const persistConfig = {
    key: PERSISTOR_KEY_NAME,
    storage: ExpoFileSystemStorage,
    transforms: [encryptor],
  };

  const persistedReducer = persistReducer(persistConfig as any, rootReducer);
  const store = createStore(persistedReducer);
  const persistor = (persistStore(store) as any) as Persistor;

  return { persistor, store };
}

export default initializeStore;
