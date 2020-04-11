import { getRandomBytesAsync } from 'expo-random';
import { v4 as uuid } from 'uuid';

async function createUuid() {
  const randomBytes = await getRandomBytesAsync(16);

  return uuid({ random: randomBytes });
}

export default createUuid;
