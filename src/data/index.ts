import { createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import createSecureStore from 'redux-persist-expo-securestore';
import { reducers } from './reducers';

const storage = createSecureStore();
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducers = persistCombineReducers(persistConfig, reducers);
const store = createStore(persistedReducers);
const persistor = persistStore(store);

export { persistor, store };
