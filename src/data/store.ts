import { AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';

import rootReducer from './reducer';

/**
 * Encryptor used to encrypt all information being stored in the non-secure
 * AsyncStorage or FileSystem of the device.
 */
const encryptor = createEncryptor({
  secretKey: 'secretEncryptionKey' /** @TODO generate key at launch */,
  onError: error => console.log('Error with Redux Persist Encryptor', error),
}) as any;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => store.getState();

export { getPersistor, getState, getStore };

export default store;
