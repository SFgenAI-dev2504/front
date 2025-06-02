import { validate } from "../../../src/core/validator/emptyValidator";

describe("emptyValidator.js tests", () => {
  it("test_validate_null_is_false", () => {
    const result = validate(null);
    expect(result).toBe(false);
  });

  it("test_validate_undefined_is_false", () => {
    const result = validate(undefined);
    expect(result).toBe(false);
  });

  it("test_validate_empty_string_is_false", () => {
    const result = validate("");
    expect(result).toBe(false);
  });

  it("test_validate_1_half_width_space_is_true", () => {
    const result = validate(" ");
    expect(result).toBe(true);
  });

  it("test_validate_1_full_width_space_is_true", () => {
    const result = validate("　");
    expect(result).toBe(true);
  });

  it("test_validate_1_half_width_character_is_true", () => {
    const result = validate("a");
    expect(result).toBe(true);
  });

  it("test_validate_1_full_width_character_is_true", () => {
    const result = validate("あ");
    expect(result).toBe(true);
  });

  it("test_validate_2_half_width_characters_is_true", () => {
    const result = validate("ab");
    expect(result).toBe(true);
  });

  it("test_validate_2_full_width_characters_is_true", () => {
    const result = validate("あい");
    expect(result).toBe(true);
  });
});
