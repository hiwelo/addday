import { SecureStoreOptions } from "expo-secure-store";
import { getAsync } from './getAsync';
import { removeAsync } from './removeAsync';
import { setAsync } from './setAsync';

export interface SecureStore {
  /**
   * Fetches the stored value associated to the provided key
   *
   * @param key Key used to store the associated value
   */
  getItem(key: string): Promise<any>;

  /**
   * Removes the stored value associated to the provided key
   *
   * @param key Key used to store the associated value
   */
  removeItem(key: string): Promise<void>;

  /**
   * Fetches the current store and adds the provided information
   *
   * @param key Key used to store the associated value
   */
  setItem(key: string, value: any): Promise<void>;
}

export interface StorageOptions extends SecureStoreOptions {
  /** Character used to replace forbidden chars */
  replacementChar: string;

  /** Function used to replace the forbidden chars for a provided key */
  replacer: (key: string, replacementChar: string) => string;
}
