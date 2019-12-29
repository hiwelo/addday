import FileSystem from 'expo-file-system';
import SecureStore, { SecureStoreOptions } from 'expo-secure-store';
import { STORAGE_FILE_URI_KEY, STORAGE_DIRECTORY_URI } from './contants';

/**
 * Returns the URI for the current file used as store, making sure that this
 * file is always the same
 * 
 * @param options Map of options matching the options for Expo's SecureStore.getItemAsync method
 * 
 * @link https://docs.expo.io/versions/latest/sdk/securestore/#securestoregetitemasynckey-options
 */
export async function fixedStorageUri(options: SecureStoreOptions): Promise<string | null> {
  // early-termination if there is no file Uri stored in the secure store
  const currentStorageFileUri = await SecureStore.getItemAsync(STORAGE_FILE_URI_KEY, options);
  if (!currentStorageFileUri) return null;

  // early-termination if a file was not provided by the secure store
  const components = currentStorageFileUri.split('persist-storage/');
  if (components.length !== 2) return null;

  const fileName = components[1];
  const fileUri = `${STORAGE_DIRECTORY_URI}${fileName}`;
  const { exists } = await FileSystem.getInfoAsync(fileUri);

  // early-termination if the file provided is not existing
  if (!exists) return null;

  return fileUri;
}
