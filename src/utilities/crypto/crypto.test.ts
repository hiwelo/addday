import { encrypt } from "./encrypt";
import { decrypt } from "./decrypt";
import { generateEncryptionKey } from "./generateEncryptionKey";

describe('Utilities > Crypto', () => {
  /* Series of variables useful for this test case */
  const testMessage = 'Test';
  let generatedKey: string;
  let encryptedString: string;

  it('should encrypt the provided message and generate a random key', () => {
    const { encryptionKey, encryptedMessage } = encrypt(testMessage);

    // updates test case variables with the result of this encryption
    generatedKey = encryptionKey;
    encryptedString = encryptedMessage;

    expect(RegExp(/^\b[a-f0-9]+\b$/gi).test(encryptionKey)).toBeTruthy();
    expect(encryptedMessage).toBeTruthy();
    expect(encryptedMessage).not.toEqual(testMessage);
  });

  it('should decrypt the provided message with the provided key', () => {
    const decryptedMessage = decrypt(encryptedString, generatedKey);

    expect(decryptedMessage).toEqual(testMessage);
    expect(decryptedMessage).not.toEqual(encryptedString);
  });

  it('should decrypt the provided message only with the key used for its generation', () => {
    const decryptedMessageWithEncryptionKey = decrypt(encryptedString, generatedKey);
    const decryptedMessageWithRandomKey = decrypt(encryptedString, generateEncryptionKey());

    expect(decryptedMessageWithEncryptionKey).toEqual(testMessage);
    expect(decryptedMessageWithRandomKey).not.toEqual(testMessage);
  });

  it('should generates a series of random keys', () => {
    const firstKey = generateEncryptionKey();
    const secondKey = generateEncryptionKey();
    const thirdKey = generateEncryptionKey();

    expect(firstKey).not.toEqual(secondKey);
    expect(firstKey).not.toEqual(thirdKey);
    expect(secondKey).not.toEqual(thirdKey);
  });
});
