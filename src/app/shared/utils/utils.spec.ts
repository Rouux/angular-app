import * as utils from './utils';

expect.prototype.anyNumber = () => Math.random() * 1e6;

describe('Utils', () => {
  describe('isNil', () => {
    it('should return true when the argument is strictly null', () => {
      expect(utils.isNil(null)).toBeTrue();
      expect(utils.isNil('null')).toBeFalse();
    });
    it('should return true when the argument is strictly undefined', () => {
      expect(utils.isNil(undefined)).toBeTrue();
      expect(utils.isNil('undefined')).toBeFalse();
    });
    it('should return false when the argument is an empty array', () => {
      expect(utils.isNil([])).toBeFalse();
    });
    it('should return false when the argument is an empty object', () => {
      expect(utils.isNil({})).toBeFalse();
    });
    it('should return false when the argument is 0', () => {
      expect(utils.isNil(0)).toBeFalse();
    });
    it('should return false when the argument is true', () => {
      expect(utils.isNil(true)).toBeFalse();
    });
    it('should return false when the argument is false', () => {
      expect(utils.isNil(false)).toBeFalse();
    });
  });
  describe('replaceAt', () => {
    const text = 'text';
    const replacement = 'replacement';

    it('should return undefined if the text is undefined', () => {
      expect(utils.replaceAt(undefined, 0)).toBeUndefined();
    });
    it('should return null if the text is undefined', () => {
      expect(utils.replaceAt(null, 0)).toBeNull();
    });
    it('should return the text if the replacement is undefined', () => {
      expect(utils.replaceAt(text, 0)).toBe(text);
    });
    it('should return the text if the index is NaN', () => {
      expect(utils.replaceAt(text, NaN, replacement)).toEqual(text);
    });
    it('should return the text if the index is negative', () => {
      expect(utils.replaceAt(text, -1, replacement)).toEqual(text);
    });
    it('should return the text if the index is > text.length', () => {
      expect(utils.replaceAt(text, text.length + 1, replacement)).toEqual(text);
    });
    it("should return the replacement if it's longer than the text", () => {
      expect(utils.replaceAt(text, 0, replacement)).toEqual(replacement);
    });
  });
});
