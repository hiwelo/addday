import { ActionsUnion, EncryptionState } from '../types';

function encryptionReducer(
  state: EncryptionState = { key: null },
  { type }: ActionsUnion,
): EncryptionState {
  switch (type) {
    case 'GET_ENCRYPTION_KEY':
      return state;

    case 'SET_ENCRYPTION_KEY':
      return {
        ...state,
        key: 'test',
      };

    default:
      return state;
  }
}

export default encryptionReducer;
