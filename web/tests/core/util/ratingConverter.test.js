import { evaluate } from "../../../src/core/util/ratingConverter";

describe("ratingConverter.js tests", () => {
  it("test_evaluate_null_is_hyphen", () => {
    const result = evaluate(null);
    expect(result).toBe("ー");
  });

  it("test_evaluate_undefined_is_hyphen", () => {
    const result = evaluate(undefined);
    expect(result).toBe("ー");
  });

  it("test_evaluate_0_is_hyphen", () => {
    const result = evaluate(0);
    expect(result).toBe("ー");
  });

  it("test_evaluate_-1_is_hyphen", () => {
    const result = evaluate(-1);
    expect(result).toBe("ー");
  });

  it("test_evaluate_6_is_hyphen", () => {
    const result = evaluate(6);
    expect(result).toBe("ー");
  });

  it("test_evaluate_1_is_hyphen", () => {
    const result = evaluate(1);
    expect(result).toBe("☆☆☆☆★");
  });

  it("test_evaluate_2_is_hyphen", () => {
    const result = evaluate(2);
    expect(result).toBe("☆☆☆★★");
  });

  it("test_evaluate_3_is_hyphen", () => {
    const result = evaluate(3);
    expect(result).toBe("☆☆★★★");
  });

  it("test_evaluate_4_is_hyphen", () => {
    const result = evaluate(4);
    expect(result).toBe("☆★★★★");
  });

  it("test_evaluate_5_is_hyphen", () => {
    const result = evaluate(5);
    expect(result).toBe("★★★★★");
  });
});
