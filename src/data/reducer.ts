import { combineReducers } from 'redux';

import configReducer from './Config/reducer';
import userReducer from './User/reducer';

const rootReducer = combineReducers({
  config: configReducer,
  user: userReducer,
});

export default rootReducer;
