import { generateUniqueId } from "utilities/uuid";
import { STORAGE_DIRECTORY_URI } from "./contants";

/**
 * Generates and returns a unique file URI to be used for our storage system
 */
export function generateStorageFileUri(): string {
  const fileName = generateUniqueId();
  const fileUri = `${STORAGE_DIRECTORY_URI}${fileName}`;

  return fileUri;
}
