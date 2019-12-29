/**
 * Generates a universally unique identifier
 */
export function generateUniqueId(): string {
  let currentDate = new Date().getTime();

  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    currentDate = currentDate + performance.now();
  }

  return 'xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, char => {
    const result = (currentDate + Math.random() * 16) % 16 | 0;
    currentDate = Math.floor(currentDate / 16);

    return (char === 'x' ? result : (result & 0x3 | 0x8)).toString(16);
  });
}
