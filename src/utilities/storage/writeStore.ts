import FileSystem from 'expo-file-system';
import SecureStore, { SecureStoreOptions } from "expo-secure-store";
import { generateStorageFileUri } from './generateStorageUri';
import { STORAGE_FILE_URI_KEY } from './contants';

/**
 * Writes the provided store as a file in the FileStorage and store its URI in
 * the SecureStore provided by the device
 * 
 * @param storeContent Content of the store to write
 * @param options Map of options matching the options for Expo's SecureStore.setItemAsync method
 * 
 * @link https://docs.expo.io/versions/latest/sdk/securestore/#securestoresetitemasynckey-options
 */
export async function writeStore(storeContent: string, options: SecureStoreOptions) {
  const generatedStorageFileUri = generateStorageFileUri();

  // writes the store with the newly generated file URI
  await FileSystem.writeAsStringAsync(generatedStorageFileUri, storeContent);

  // updates the SecureStore with the URI to the new store
  await SecureStore.setItemAsync(STORAGE_FILE_URI_KEY, generatedStorageFileUri, options);
}
