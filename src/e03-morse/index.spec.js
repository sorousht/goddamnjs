const {decode} = require('./');
// const morse = require ('./index.js')

describe('decode', () => {
  test('it should return an empty string if the given encoded text is empty as well', () => {
    expect(decode("")).toBe("");
  });
  
  test('it should return A if the given encoded text is .-', () =>  {
      expect(decode(".-")).toBe("A");
  });

  test('it should decode all of the morse letters', () => {
    expect(decode("--.")).toBe("G");
    expect(decode("...")).toBe("S");
    expect(decode(".----")).toBe("1");
  });
});