import { UserState, UserAction } from './types';

const INITIAL_STATE: UserState = {
  firstName: '',
  isInitialized: false,
};

function userReducer(state = INITIAL_STATE, action: UserAction): UserState {
  const { type, user } = action;

  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        ...user,
      };

    case 'RESET_USER':
      return INITIAL_STATE;

    default:
      return state;
  }
}

export default userReducer;
