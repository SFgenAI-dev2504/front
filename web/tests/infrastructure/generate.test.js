import axios from "axios";
import { generate } from "../../src/infrastructure/index";

// axios.post をモック
jest.mock("axios");

describe("generate.js tests", () => {
  const planetName = "TEST";
  const sliderValue = {
    atmosphere: 90,
    aurora: 50,
    diameter: 12742,
    distance: 150,
    gravity: 1,
    temperature: 15,
    terrain: 50,
    volcano: 60,
    water: 80,
  };

  it("generate_normal_200", async () => {
    const responseHttpStatusCode = 200;
    const mockResponseBody = {
      imageFileName: "test.png",
      imageUrl: "http://localhost:5000/static/output/test.png",
      imageId: "20250730145332_7261",
      explanation: "テキスト",
      rate: 1,
      code: null,
      message: null,
    };

    axios.post.mockResolvedValue({
      data: mockResponseBody,
      status: responseHttpStatusCode,
    });

    const result = await generate(sliderValue, planetName);

    expect(result).toEqual({
      ...mockResponseBody,
      status: 200,
    });
  });

  it("generate_error_timeout", async () => {
    const responseHttpStatusCode = 504;

    axios.post.mockRejectedValue({
      code: "ECONNABORTED",
      response: { data: { error: "timeout" } },
    });

    const result = await generate(sliderValue, planetName);

    expect(result).toEqual({
      error: "timeout",
      status: responseHttpStatusCode,
    });
  });

  it("generate_error_500", async () => {
    const responseHttpStatusCode = 500;
    const mockResponseBody = {
      imageFileName: null,
      imageUrl: null,
      imageId: null,
      explanation: null,
      rate: null,
      code: "E01_001",
      message: "ChatGPTの画像生成に失敗しました。",
    };

    axios.post.mockRejectedValue({
      code: null,
      response: { data: mockResponseBody, status: responseHttpStatusCode },
    });

    const result = await generate(sliderValue, planetName);

    expect(result).toEqual({
      ...mockResponseBody,
      status: responseHttpStatusCode,
    });
  });
});
