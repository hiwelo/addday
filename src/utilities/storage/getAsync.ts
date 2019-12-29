import FileSystem from 'expo-file-system';
import SecureStore, { SecureStoreOptions } from 'expo-secure-store';
import { decrypt } from 'utilities/crypto';
import { fixedStorageUri } from './fixedStorageUri';

/**
 * Fetches the stored value associated to the provided key
 * 
 * @param key Key used to store the associated value
 * @param options Map of options matching the options for Expo's SecureStore.getItemAsync method
 * 
 * @link https://docs.expo.io/versions/latest/sdk/securestore/#securestoregetitemasynckey-options
 */
export async function getAsync(key: string, options: SecureStoreOptions): Promise<any|null> {
  return new Promise(async (resolve, reject) => {
    try {
      // early-termination if there is no AES key returned by the SecureStore
      const aesKey = await SecureStore.getItemAsync(key, options);
      if (!aesKey) return resolve(null);
      
      // early-termination if there is no URI available for the storage file
      const storageFileUri = await fixedStorageUri(options);
      if (!storageFileUri) return resolve(null);

      const storedString = await FileSystem.readAsStringAsync(storageFileUri);
      const storedInfo = JSON.parse(storedString);
      const encryptedValue = storedInfo[key];
      const decryptedValue = decrypt(encryptedValue, aesKey);

      return resolve(decryptedValue);
    } catch (error) {
      reject(error);
    }
  });
}
