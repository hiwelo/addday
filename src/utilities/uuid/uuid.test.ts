import { generateUniqueId } from "./uuid";

describe('Utility > UUID', () => {
  it('should generates a series of unique identifiers', () => {
    const uuid1 = generateUniqueId();
    const uuid2 = generateUniqueId();
    const uuid3 = generateUniqueId();
    const uuid4 = generateUniqueId();
    const uuid5 = generateUniqueId();

    expect(uuid1).not.toEqual(uuid2);
    expect(uuid1).not.toEqual(uuid3);
    expect(uuid1).not.toEqual(uuid4);
    expect(uuid1).not.toEqual(uuid5);
    expect(uuid2).not.toEqual(uuid3);
    expect(uuid2).not.toEqual(uuid4);
    expect(uuid2).not.toEqual(uuid5);
    expect(uuid3).not.toEqual(uuid4);
    expect(uuid3).not.toEqual(uuid5);
    expect(uuid4).not.toEqual(uuid5);
  });
});
