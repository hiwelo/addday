import FileSystem from 'expo-file-system';
import SecureStore, { SecureStoreOptions } from "expo-secure-store";
import { encrypt } from 'utilities/crypto';
import { fixedStorageUri } from "./fixedStorageUri";
import { generateStorageFileUri } from './generateStorageUri';
import { writeStore } from './writeStore';

/**
 * Fetches the current store and adds the provided information
 * 
 * @param key Key used to store the associated value
 * @param value Value associted to the provided key to store
 * @param options Map of options matching the options for Expo's SecureStore.getItemAsync method
 * 
 * @link https://docs.expo.io/versions/latest/sdk/securestore/#securestoregetitemasynckey-options
 */
export async function setAsync(key: string, value: any, options: SecureStoreOptions): Promise<null> {
  return new Promise(async (resolve, reject) => {
    try {
      // fetches the current store 
      const currentStorageFileUri = await fixedStorageUri(options);
      const currentStoreString = currentStorageFileUri
        ? await FileSystem.readAsStringAsync(currentStorageFileUri)
        : '';
      const currentStore = JSON.parse(currentStoreString);
      const { encryptionKey, encryptedMessage } = encrypt(value);

      // updates the store with the new key/value
      const updatedStore = { ...currentStore, [key]: encryptedMessage };
      const updatedContentForStorage = JSON.stringify(updatedStore);

      // writes the new store in the file used for its storage
      await writeStore(updatedContentForStorage, options);

      // stores the URI of the file containing the updated store in the secure storage
      await SecureStore.setItemAsync(key, encryptionKey, options);

      // deletes the previous store if existing
      if (currentStorageFileUri) {
        await FileSystem.deleteAsync(currentStorageFileUri, { idempotent: true });
      }

      return resolve();
    } catch (error) {
      reject(error)
    }
  });
}
