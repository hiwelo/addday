import { combineReducers } from 'redux';

import userReducer from './User/reducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
