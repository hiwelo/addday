import { Map } from 'immutable';
import { REHYDRATE } from 'redux-persist';

import { ActionsUnion, IntakesState } from '../types';

const INITIAL_STATE: IntakesState = Map();

function intakeReducer(
  state: IntakesState = INITIAL_STATE,
  action: ActionsUnion,
): IntakesState {
  switch (action.type) {
    case `CLEAR_INTAKES_ACTION`:
    case `RESET_APP`:
      return state.clear();

    case `DELETE_INTAKE_ACTION`:
      return state.delete(action.payload);

    case `SET_INTAKE_ACTION`:
      return state.set(action.payload.id, action.payload);

    case REHYDRATE:
      return Map(action.payload.intakes);

    default:
      return state;
  }
}

export default intakeReducer;
