import CryptoJS from 'crypto-js';

/**
 * Decrypts a message using the provided passphrase
 * 
 * @param encryptedMessage Encrypted message to decrypt
 * @param secretPassphrase Secret passphrased used for the encryption
 */
export function decrypt(
  encryptedMessage: string,
  secretPassphrase: string
): string {
  const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, secretPassphrase);

  return decryptedMessage.toString(CryptoJS.enc.Utf8);
};
