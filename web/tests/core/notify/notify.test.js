// react-toastifyをモック化。
jest.mock("react-toastify", () => ({
  toast: {
    info: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  },
}));

import { toast } from "react-toastify";
import { info, warn, error } from "../../../src/core/notify/notify";
import { TOAST_OPTION, TOAST_ERROR_OPTION } from "../../../src/constant/dimens";

describe("notify.js tests", () => {
  const message = "テストメッセージ";

  it("test_success", () => {
    info(message);
    expect(toast.info).toHaveBeenCalledWith(message, TOAST_OPTION);
  });

  it("test_warn", () => {
    warn(message);
    expect(toast.warn).toHaveBeenCalledWith(message, TOAST_OPTION);
  });

  it("test_error", () => {
    error(message);
    expect(toast.error).toHaveBeenCalledWith(message, TOAST_ERROR_OPTION);
  });
});
