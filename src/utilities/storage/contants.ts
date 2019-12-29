import FileSystem from 'expo-file-system';

/** Key used to store the URI of the storage file */
export const STORAGE_FILE_URI_KEY = 'storage_file_uri';

/** URI of the directory used by the FileStorage system */
export const STORAGE_DIRECTORY_URI = `${FileSystem.documentDirectory}persist-storage/`;
