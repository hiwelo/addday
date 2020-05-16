import { combineReducers } from 'redux';

import configReducer from './Config/reducer';
import intakesReducer from './Intakes/reducer';
import medsReducer from './Meds/reducer';
import userReducer from './User/reducer';

const rootReducer = combineReducers({
  config: configReducer,
  meds: medsReducer,
  intakes: intakesReducer,
  user: userReducer,
});

export default rootReducer;
