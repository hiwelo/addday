import { ActionsUnion } from '../types';

/**
 * Fetches the encryption key
 */
function getEncryptionKey(): ActionsUnion {
  return {
    type: 'GET_ENCRYPTION_KEY',
  };
}

/**
 * Saves a new encryption key
 */
function setEncryptionKey(key: string): ActionsUnion {
  return {
    type: 'SET_ENCRYPTION_KEY',
    payload: key,
  };
}

export { getEncryptionKey, setEncryptionKey };
