import { EncryptionState, EncryptionAction } from './types';

const INITIAL_STATE: EncryptionState = {
  key: null,
};

function encryptionReducer(
  state = INITIAL_STATE,
  action: EncryptionAction,
): EncryptionState {
  const { type } = action;

  switch (type) {
    case 'SET_KEY':
      return {
        ...state,
        key: 'test',
      };

    case 'GET_KEY':
      return state;

    default:
      return state;
  }
}

export default encryptionReducer;
