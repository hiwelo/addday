import FileSystem from 'expo-file-system';
import SecureStore, { SecureStoreOptions } from 'expo-secure-store';
import { fixedStorageUri } from './fixedStorageUri';
import { writeStore } from './writeStore';

/**
 * Removes the stored value associated to the provided key
 * 
 * @param key Key used to store the associated value
 * @param options Map of options matching the options for Expo's SecureStore.getItemAsync method
 * 
 * @link https://docs.expo.io/versions/latest/sdk/securestore/#securestoregetitemasynckey-options
 */
export async function removeAsync(key: string, options: SecureStoreOptions) {
  return new Promise(async (resolve, reject) => {
    try {
      // early-termination if there is no file currently storing information
      const currentStorageFileUri = await fixedStorageUri(options);
      if (!currentStorageFileUri) return resolve();

      // fetches the current store and remove the provided key
      const currentStoreString = await FileSystem.readAsStringAsync(currentStorageFileUri);
      const currentStore = JSON.parse(currentStoreString);
      delete currentStore[key];

      // writes the updated store
      await writeStore(currentStore, options);

      // deletes the previous store
      await FileSystem.deleteAsync(currentStorageFileUri, { idempotent: true });

      // removes the encryption key from the SecureStore for the deleted key
      await SecureStore.deleteItemAsync(key, options);

      resolve();
    } catch (error) {
      reject(error);
    }
  });
}
