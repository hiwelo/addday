import { ActionsUnion, UserState } from '../types';

const INITIAL_STATE: UserState = {
  firstName: '',
  isInitialized: false,
};

function userReducer(
  state: UserState = INITIAL_STATE,
  action: ActionsUnion,
): UserState {
  switch (action.type) {
    case `RESET_APP`:
      return INITIAL_STATE;

    case 'RESET_USER':
      return INITIAL_STATE;

    case 'SET_USER':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
