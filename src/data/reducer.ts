import { combineReducers } from 'redux';

import configReducer from './Config/reducer';
import medsReducer from './Meds/reducer';
import scheduledIntakeReducer from './ScheduledIntake/reducer';
import userReducer from './User/reducer';

const rootReducer = combineReducers({
  config: configReducer,
  meds: medsReducer,
  intakes: scheduledIntakeReducer,
  user: userReducer,
});

export default rootReducer;
