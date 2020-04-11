import { getRandomBytesAsync } from 'expo-random';
import { getItemAsync, setItemAsync } from 'expo-secure-store';
import { v4 as uuid } from 'uuid';

import { ENCRYPTION_KEY_NAME } from '../../config/store';

/**
 * Gets the existing encryption key for this project
 * If none is set, it generates a new one and stores it for future use
 */
async function getEncryptionKey(): Promise<string> {
  // early-termination if a key is already existing
  const currentKey = await getItemAsync(ENCRYPTION_KEY_NAME);
  if (currentKey) return currentKey;

  // generates a new key
  const randomBytes = await getRandomBytesAsync(24);
  const generatedKey = uuid({ random: randomBytes });

  // stores the new key
  setItemAsync(ENCRYPTION_KEY_NAME, generatedKey);

  return generatedKey;
}

export default getEncryptionKey;
