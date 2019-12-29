export interface EncryptionResult {
  /** String resulting from the encryption of the provided message */
  encryptedMessage: string;
  /** Randomly generated key used to encrypt the provided message */
  encryptionKey: string;
}
