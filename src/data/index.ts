import { createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import createSecureStore from 'redux-persist-expo-securestore';
import { reducers } from './reducers';

// Secure storage
const storage = createSecureStore();

const config = {
  key: 'root',
  storage
};

const reducer = persistCombineReducers(config, reducers);

function configureStore() {
  // ...
  const store = createStore(reducer);
  const persistor = persistStore(store);

  return { persistor, store };
}
