import CryptoJS from 'crypto-js';
import { generateEncryptionKey } from "./generateEncryptionKey";
import { EncryptionResult } from './types';

/**
 * Encrypts a message using a randomly generated key and returns both encrypted
 * message and its encryption key
 * 
 * @param message Message to encrypt
 */
export function encrypt(message: string): EncryptionResult {
  const encryptionKey = generateEncryptionKey();
  const encryptedBlob = CryptoJS.AES.encrypt(message, encryptionKey);
  const encryptedMessage = encryptedBlob.toString();

  return { encryptedMessage, encryptionKey };
}
