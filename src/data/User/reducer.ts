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
    case 'SET_USER':
      return {
        ...state,
        ...action.payload,
      };

    case 'RESET_USER':
      return INITIAL_STATE;

    default:
      return state;
  }
}

export default userReducer;
