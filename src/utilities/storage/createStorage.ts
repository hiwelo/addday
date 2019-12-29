import { createDirectory } from './createDirectory';
import { getAsync } from './getAsync';
import { removeAsync } from './removeAsync';
import { setAsync } from './setAsync';
import { SecureStore, StorageOptions } from './types';

const defaultOptions: StorageOptions = {
  replacementChar: '_',
  replacer: (string, char) => string.replace(/[^a-z0-9.\-_]/gi, char),
};

export async function createStorage(options: Partial<StorageOptions> = {}): Promise<SecureStore> {
  const replacementChar = options.replacementChar ?? defaultOptions.replacementChar;
  const replacer = options.replacer ?? defaultOptions.replacer;

  // creates the directory used for the storage of the store
  await createDirectory();

  return {
    getItem: key => getAsync(replacer(key, replacementChar), options),
    removeItem: key => removeAsync(replacer(key, replacementChar), options),
    setItem: (key, value) => setAsync(replacer(key, replacementChar), value, options),
  };
}
