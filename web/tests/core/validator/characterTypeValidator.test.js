import { validate } from "../../../src/core/validator/characterTypeValidator";

describe("characterTypeValidator.js tests", () => {
  describe("test_validate", () => {
    it("test_validate_null_is_false", () => {
      const result = validate(null);
      expect(result).toBe(false);
    });

    it("test_validate_kana_is_true", () => {
      const result = validate(
        "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンヰヱガギグゲゴザジズゼソダヂヅデドバビブベボャュョー",
      );
      expect(result).toBe(true);
    });

    it("test_validate_alphabet_is_true", () => {
      const result = validate("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      expect(result).toBe(true);
    });

    it("test_validate_kana_and_alphabet_is_true", () => {
      const result = validate(
        "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンヰヱガギグゲゴザジズゼソダヂヅデドバビブベボャュョーABCDEFGHIJKLMNOPQRSTUVWXYZ",
      );
      expect(result).toBe(true);
    });

    it("test_validate_lowercase_alphabet_is_false", () => {
      const result = validate("a");
      expect(result).toBe(false);
    });

    it("test_validate_lowercase_number_is_false", () => {
      const result = validate("0");
      expect(result).toBe(false);
    });

    it("test_validate_uppercase_number_is_false", () => {
      const result = validate("０");
      expect(result).toBe(false);
    });

    it("test_validate_hiragane_is_false", () => {
      const result = validate("あ");
      expect(result).toBe(false);
    });
  });
});
