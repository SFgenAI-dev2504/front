import axios from "axios";
import { decide } from "../../src/infrastructure/index";

jest.mock("axios");

describe("decide.js tests", () => {
  const imageId = "20250101235959_1234";

  it("decide_normal_200", async () => {
    const responseHttpStatusCode = 200;
    const mockResponseBody = {
      code: null,
      message: null,
    };

    axios.post.mockResolvedValue({
      data: mockResponseBody,
      status: responseHttpStatusCode,
    });

    const result = await decide(imageId);

    expect(result).toEqual({
      ...mockResponseBody,
      status: 200,
    });
  });

  it("decide_error_timeout", async () => {
    const responseHttpStatusCode = 504;

    axios.post.mockRejectedValue({
      code: "ECONNABORTED",
      response: { data: { error: "timeout" } },
    });

    const result = await decide(imageId);

    expect(result).toEqual({
      error: "timeout",
      status: responseHttpStatusCode,
    });
  });

  it("decide_error_500", async () => {
    const responseHttpStatusCode = 500;
    const mockResponseBody = {
      code: "E02_001",
      message: "submitファイル、もしくはディレクトリが存在しません。",
    };

    axios.post.mockRejectedValue({
      code: null,
      response: { data: mockResponseBody, status: responseHttpStatusCode },
    });

    const result = await decide(imageId);

    expect(result).toEqual({
      ...mockResponseBody,
      status: responseHttpStatusCode,
    });
  });
});
