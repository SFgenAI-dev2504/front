import { toLocaleString } from "../../../src/core/util/stringFormat";
import PromptType from "../../../src/models/PromptType";

describe("stringFormat.js tests", () => {
  describe("test_toLocaleString", () => {
    it("test_toLocaleString_null_is_hyphen", () => {
      const result = toLocaleString(PromptType.DIAMETER, null);
      expect(result).toBe("-");
    });

    it("test_toLocaleString_undefined_is_hyphen", () => {
      const result = toLocaleString(PromptType.DIAMETER, undefined);
      expect(result).toBe("-");
    });

    it("test_toLocaleString_-1_is_-1", () => {
      const result = toLocaleString(PromptType.DIAMETER, -1);
      expect(result).toBe("-1");
    });

    it("test_toLocaleString_0_is_0", () => {
      const result = toLocaleString(PromptType.DIAMETER, 0);
      expect(result).toBe("0");
    });

    it("test_toLocaleString_10_is_10", () => {
      const result = toLocaleString(PromptType.DIAMETER, 10);
      expect(result).toBe("10");
    });

    it("test_toLocaleString_100_is_100", () => {
      const result = toLocaleString(PromptType.DIAMETER, 100);
      expect(result).toBe("100");
    });

    it("test_toLocaleString_999_is_999", () => {
      const result = toLocaleString(PromptType.DIAMETER, 999);
      expect(result).toBe("999");
    });

    it("test_toLocaleString_1000_is_1,000", () => {
      const result = toLocaleString(PromptType.DIAMETER, 1000);
      expect(result).toBe("1,000");
    });

    it("test_toLocaleString_999999_is_999,999", () => {
      const result = toLocaleString(PromptType.DIAMETER, 999999);
      expect(result).toBe("999,999");
    });

    it("test_toLocaleString_1000000_is_1,000,000", () => {
      const result = toLocaleString(PromptType.DIAMETER, 1000000);
      expect(result).toBe("1,000,000");
    });

    it("test_toLocaleString_0_is_0.00", () => {
      const result = toLocaleString(PromptType.GRAVITY, 0);
      expect(result).toBe("0.00");
    });

    it("test_toLocaleString_0.0_is_0.00", () => {
      const result = toLocaleString(PromptType.GRAVITY, 0.0);
      expect(result).toBe("0.00");
    });

    it("test_toLocaleString_0.01_is_0.01", () => {
      const result = toLocaleString(PromptType.GRAVITY, 0.01);
      expect(result).toBe("0.01");
    });

    it("test_toLocaleString_0.011_is_0.01", () => {
      const result = toLocaleString(PromptType.GRAVITY, 0.011);
      expect(result).toBe("0.01");
    });
  });
});
