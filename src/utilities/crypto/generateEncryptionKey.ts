/**
 * Generates a key to be used to encrypt messages
 *
 * @param length Size of the key to generate
 */
export function generateEncryptionKey(length = 256): string {
  const hexadecimal = '0123456789abcdef';
  /** Array used to store the randomly generated key letters */
  const keyItems = [];

  // Random selection of hexadecimal elements for the generated key
  for (let i = 0; i < length; i++) {
    keyItems.push(hexadecimal.charAt(Math.floor(Math.random() * 16)));
  }
  
  return keyItems.join('');
}
