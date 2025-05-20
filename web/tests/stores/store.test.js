import { renderHook } from "@testing-library/react";
import { usePlanetNameStore, useSliderStore } from "../../src/stores/store";
import * as Config from "../../src/constant/config";
import { act } from "react";

describe("store.js tests", () => {
  describe("useSliderStore hook", () => {
    it("test_sliders_initialize", () => {
      const { result } = renderHook(() => useSliderStore());
      expect(result.current.sliders.length).toBe(5);
      expect(result.current.sliders[0]).toBe(Config.DIAMETER_DEFAULT);
      expect(result.current.sliders[1]).toBe(Config.MASS_DEFAULT);
      expect(result.current.sliders[2]).toBe(
        Config.AVERAGE_DISTANCE_FROM_THE_SUN_DEFAULT,
      );
      expect(result.current.sliders[3]).toBe(Config.REVOLUTION_PERIOD_DEFAULT);
      expect(result.current.sliders[4]).toBe(Config.ROTATION_PERIOD_DEFAULT);
    });

    it("test_setSliderValue", () => {
      const { result } = renderHook(() => useSliderStore());

      act(() => {
        result.current.setSliderValue(0, 1000);
        result.current.setSliderValue(1, 2000);
        result.current.setSliderValue(2, 3000);
        result.current.setSliderValue(3, 4000);
        result.current.setSliderValue(4, 5000);
      });

      expect(result.current.sliders.length).toBe(5);
      expect(result.current.sliders[0]).toBe(1000);
      expect(result.current.sliders[1]).toBe(2000);
      expect(result.current.sliders[2]).toBe(3000);
      expect(result.current.sliders[3]).toBe(4000);
      expect(result.current.sliders[4]).toBe(5000);
    });
  });

  describe("usePlanetNameStore hook", () => {
    it("test_planetName_initialize", () => {
      const { result } = renderHook(() => usePlanetNameStore());
      expect(result.current.planetName.length).toBe(0);
      expect(result.current.planetName).toBe("");
    });

    it("test_setPlanetName", () => {
      const { result } = renderHook(() => usePlanetNameStore());

      act(() => {
        result.current.setPlanetName("test_name");
      });

      expect(result.current.planetName).toBe("test_name");
    });
  });
});
