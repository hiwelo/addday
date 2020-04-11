import { combineReducers } from 'redux';

import configReducer from './Config/reducer';
import medsReducer from './Meds/reducer';
import userReducer from './User/reducer';

const rootReducer = combineReducers({
  config: configReducer,
  meds: medsReducer,
  user: userReducer,
});

export default rootReducer;
