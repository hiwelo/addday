import { EncryptionAction } from './types';

/**
 * Fetches the encryption key
 */
function getEncryptionKey(): EncryptionAction {
  return {
    type: 'GET_KEY',
  };
}

/**
 * Saves a new encryption key
 */
function setEncryptionKey(key: string): EncryptionAction {
  return {
    type: 'SET_KEY',
    key,
  };
}

export { getEncryptionKey, setEncryptionKey };
