import {
  validateMin,
  validateMax,
  validateMinAndMax,
} from "../../../src/core/validator/lengthValidator";
describe("lengthValidator.js tests", () => {
  describe("test_validateMin", () => {
    it("test_validateMin_null_is_false", () => {
      const result = validateMin(null, 1);
      expect(result).toBe(false);
    });

    it("test_validateMin_undefined_is_false", () => {
      const result = validateMin(undefined, 1);
      expect(result).toBe(false);
    });

    it("test_validateMin_empty_string_is_false", () => {
      const result = validateMin("", 1);
      expect(result).toBe(false);
    });

    it("test_validateMin_1_half_width_space_is_true", () => {
      const result = validateMin(" ", 1);
      expect(result).toBe(true);
    });

    it("test_validateMin_1_full_width_space_is_true", () => {
      const result = validateMin("　", 1);
      expect(result).toBe(true);
    });

    it("test_validateMin_1_half_width_character_for_min_1_is_true", () => {
      const result = validateMin("a", 1);
      expect(result).toBe(true);
    });

    it("test_validateMin_1_full_width_character_for_min_1_is_true", () => {
      const result = validateMin("あ", 1);
      expect(result).toBe(true);
    });

    it("test_validateMin_2_half_width_character_for_min_1_is_true", () => {
      const result = validateMin("ab", 1);
      expect(result).toBe(true);
    });

    it("test_validateMin_2_full_width_character_for_min_1_is_true", () => {
      const result = validateMin("あい", 1);
      expect(result).toBe(true);
    });

    it("test_validateMin_2_half_width_character_for_min_2_is_true", () => {
      const result = validateMin("ab", 2);
      expect(result).toBe(true);
    });

    it("test_validateMin_2_full_width_character_for_min_2_is_true", () => {
      const result = validateMin("あい", 2);
      expect(result).toBe(true);
    });

    it("test_validateMin_1_half_width_character_for_min_2_is_false", () => {
      const result = validateMin("a", 2);
      expect(result).toBe(false);
    });

    it("test_validateMin_1_full_width_character_for_min_2_is_false", () => {
      const result = validateMin("あ", 2);
      expect(result).toBe(false);
    });
  });

  describe("test_validateMax", () => {
    it("test_validateMax_null_is_false", () => {
      const result = validateMax(null, 1);
      expect(result).toBe(false);
    });

    it("test_validateMax_undefined_is_false", () => {
      const result = validateMax(undefined, 1);
      expect(result).toBe(false);
    });

    it("test_validateMax_empty_string_is_false", () => {
      const result = validateMax("", 1);
      expect(result).toBe(false);
    });

    it("test_validateMax_1_half_width_space_is_true", () => {
      const result = validateMax(" ", 1);
      expect(result).toBe(true);
    });

    it("test_validateMax_1_full_width_space_is_true", () => {
      const result = validateMax("　", 1);
      expect(result).toBe(true);
    });

    it("test_validateMax_1_half_width_character_for_max_1_is_true", () => {
      const result = validateMax("a", 1);
      expect(result).toBe(true);
    });

    it("test_validateMax_1_full_width_character_for_max_1_is_true", () => {
      const result = validateMax("あ", 1);
      expect(result).toBe(true);
    });

    it("test_validateMax_2_half_width_character_for_max_2_is_true", () => {
      const result = validateMax("ab", 2);
      expect(result).toBe(true);
    });

    it("test_validateMax_2_full_width_character_for_max_2_is_true", () => {
      const result = validateMax("あい", 2);
      expect(result).toBe(true);
    });

    it("test_validateMax_2_half_width_character_for_max_2_is_true", () => {
      const result = validateMax("ab", 2);
      expect(result).toBe(true);
    });

    it("test_validateMax_2_full_width_character_for_max_2_is_true", () => {
      const result = validateMax("あい", 2);
      expect(result).toBe(true);
    });

    it("test_validateMax_3_half_width_character_for_max_2_is_false", () => {
      const result = validateMax("abc", 2);
      expect(result).toBe(false);
    });

    it("test_validateMax_3_full_width_character_for_max_2_is_false", () => {
      const result = validateMax("あいう", 2);
      expect(result).toBe(false);
    });
  });

  describe("test_validateMinAndMax", () => {
    it("test_validateMinAndMax_null_is_false", () => {
      const result = validateMinAndMax(null, 1, 1);
      expect(result).toBe(false);
    });

    it("test_validateMinAndMax_undefined_is_false", () => {
      const result = validateMinAndMax(undefined, 1, 1);
      expect(result).toBe(false);
    });

    it("test_validateMinAndMax_empty_string_is_false", () => {
      const result = validateMinAndMax("", 1, 1);
      expect(result).toBe(false);
    });

    it("test_validateMinAndMax_1_half_width_space_is_true", () => {
      const result = validateMinAndMax(" ", 1, 1);
      expect(result).toBe(true);
    });

    it("test_validateMinAndMax_1_full_width_space_is_true", () => {
      const result = validateMinAndMax("　", 1, 1);
      expect(result).toBe(true);
    });

    it("test_validateMinAndMax_1_half_width_character_for_min_1_max_1_is_true", () => {
      const result = validateMinAndMax("a", 1, 1);
      expect(result).toBe(true);
    });

    it("test_validateMinAndMax_1_full_width_character_for_min_1_max_1_is_true", () => {
      const result = validateMinAndMax("あ", 1, 1);
      expect(result).toBe(true);
    });

    it("test_validateMinAndMax_2_half_width_character_for_min_1_max_2_is_true", () => {
      const result = validateMinAndMax("ab", 1, 2);
      expect(result).toBe(true);
    });

    it("test_validateMinAndMax_2_full_width_character_for_min_1_max_2_is_true", () => {
      const result = validateMinAndMax("あい", 1, 2);
      expect(result).toBe(true);
    });

    it("test_validateMinAndMax_2_half_width_character_for_min_2_max_3_is_true", () => {
      const result = validateMinAndMax("ab", 2, 3);
      expect(result).toBe(true);
    });

    it("test_validateMinAndMax_2_full_width_character_for_min_2_max_3_is_true", () => {
      const result = validateMinAndMax("あい", 2, 3);
      expect(result).toBe(true);
    });

    it("test_validateMinAndMax_1_half_width_character_for_min_2_max_3_is_false", () => {
      const result = validateMinAndMax("a", 2, 3);
      expect(result).toBe(false);
    });

    it("test_validateMinAndMax_1_full_width_character_for_min_2_max_3_is_false", () => {
      const result = validateMinAndMax("あ", 2, 3);
      expect(result).toBe(false);
    });

    it("test_validateMinAndMax_3_half_width_character_for_min_1_max_2_is_false", () => {
      const result = validateMinAndMax("abc", 1, 2);
      expect(result).toBe(false);
    });

    it("test_validateMinAndMax_3_full_width_character_for_min_1_max_2_is_false", () => {
      const result = validateMinAndMax("あいう", 1, 2);
      expect(result).toBe(false);
    });
  });
});
