import { renderHook } from "@testing-library/react";
import {
  usePlanetNameStore,
  usePlanetTypeStore,
  useSliderStore,
} from "../../src/stores/store";
import * as Config from "../../src/constant/config";
import { act } from "react";
import PromptType from "../../src/models/PromptType";
import PlanetType from "../../src/models/PlanetType";

describe("store.js tests", () => {
  describe("useSliderStore hook", () => {
    it("test_sliders_initialize", () => {
      const { result } = renderHook(() => useSliderStore());
      expect(result.current.sliders[PromptType.DIAMETER]).toBe(
        Config.EARTH_DIAMETER_VALUE,
      );
      expect(result.current.sliders[PromptType.GRAVITY]).toBe(
        Config.EARTH_GRAVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.DISTANCE_FROM_SUN]).toBe(
        Config.EARTH_DISTANCE_FROM_SUN_VALUE,
      );
      expect(
        result.current.sliders[PromptType.AVERAGE_SURFACE_TEMPERATURE],
      ).toBe(Config.EARTH_AVERAGE_SURFACE_TEMPERATURE_VALUE);
      expect(result.current.sliders[PromptType.ATMOSPHERIC_DENSITY]).toBe(
        Config.EARTH_ATMOSPHERIC_DENSITY_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER_AMOUNT]).toBe(
        Config.EARTH_WATER_AMOUNT_VALUE,
      );
      expect(result.current.sliders[PromptType.SURFACE_UNEVENNESS]).toBe(
        Config.EARTH_SURFACE_UNEVENNESS_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANIC_ACTIVITY]).toBe(
        Config.EARTH_VOLCANIC_ACTIVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.AURORA]).toBe(
        Config.EARTH_AURORA_VALUE,
      );
    });

    it("test_setSliderValueByPromptType", () => {
      const { result } = renderHook(() => useSliderStore());

      act(() => {
        result.current.setSliderValueByPromptType(PromptType.DIAMETER, 1000);
        result.current.setSliderValueByPromptType(PromptType.GRAVITY, 2000);
        result.current.setSliderValueByPromptType(
          PromptType.DISTANCE_FROM_SUN,
          3000,
        );
        result.current.setSliderValueByPromptType(
          PromptType.AVERAGE_SURFACE_TEMPERATURE,
          4000,
        );
        result.current.setSliderValueByPromptType(
          PromptType.ATMOSPHERIC_DENSITY,
          5000,
        );
        result.current.setSliderValueByPromptType(
          PromptType.WATER_AMOUNT,
          6000,
        );
        result.current.setSliderValueByPromptType(
          PromptType.SURFACE_UNEVENNESS,
          7000,
        );
        result.current.setSliderValueByPromptType(
          PromptType.VOLCANIC_ACTIVITY,
          8000,
        );
        result.current.setSliderValueByPromptType(PromptType.AURORA, 9000);
      });

      expect(result.current.sliders[PromptType.DIAMETER]).toBe(1000);
      expect(result.current.sliders[PromptType.GRAVITY]).toBe(2000);
      expect(result.current.sliders[PromptType.DISTANCE_FROM_SUN]).toBe(3000);
      expect(
        result.current.sliders[PromptType.AVERAGE_SURFACE_TEMPERATURE],
      ).toBe(4000);
      expect(result.current.sliders[PromptType.ATMOSPHERIC_DENSITY]).toBe(5000);
      expect(result.current.sliders[PromptType.WATER_AMOUNT]).toBe(6000);
      expect(result.current.sliders[PromptType.SURFACE_UNEVENNESS]).toBe(7000);
      expect(result.current.sliders[PromptType.VOLCANIC_ACTIVITY]).toBe(8000);
      expect(result.current.sliders[PromptType.AURORA]).toBe(9000);
    });

    it("test_setSliderValueByPlanetType_PlanetType.MERCURY", () => {
      const { result } = renderHook(() => useSliderStore());

      act(() => {
        result.current.setSliderValueByPlanetType(PlanetType.MERCURY);
      });

      expect(result.current.sliders[PromptType.DIAMETER]).toBe(
        Config.MERCURY_DIAMETER_VALUE,
      );
      expect(result.current.sliders[PromptType.GRAVITY]).toBe(
        Config.MERCURY_GRAVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.DISTANCE_FROM_SUN]).toBe(
        Config.MERCURY_DISTANCE_FROM_SUN_VALUE,
      );
      expect(
        result.current.sliders[PromptType.AVERAGE_SURFACE_TEMPERATURE],
      ).toBe(Config.MERCURY_AVERAGE_SURFACE_TEMPERATURE_VALUE);
      expect(result.current.sliders[PromptType.ATMOSPHERIC_DENSITY]).toBe(
        Config.MERCURY_ATMOSPHERIC_DENSITY_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER_AMOUNT]).toBe(
        Config.MERCURY_WATER_AMOUNT_VALUE,
      );
      expect(result.current.sliders[PromptType.SURFACE_UNEVENNESS]).toBe(
        Config.MERCURY_SURFACE_UNEVENNESS_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANIC_ACTIVITY]).toBe(
        Config.MERCURY_VOLCANIC_ACTIVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.AURORA]).toBe(
        Config.MERCURY_AURORA_VALUE,
      );
    });

    it("test_setSliderValueByPlanetType_PlanetType.VENUS", () => {
      const { result } = renderHook(() => useSliderStore());

      act(() => {
        result.current.setSliderValueByPlanetType(PlanetType.VENUS);
      });

      expect(result.current.sliders[PromptType.DIAMETER]).toBe(
        Config.VENUS_DIAMETER_VALUE,
      );
      expect(result.current.sliders[PromptType.GRAVITY]).toBe(
        Config.VENUS_GRAVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.DISTANCE_FROM_SUN]).toBe(
        Config.VENUS_DISTANCE_FROM_SUN_VALUE,
      );
      expect(
        result.current.sliders[PromptType.AVERAGE_SURFACE_TEMPERATURE],
      ).toBe(Config.VENUS_AVERAGE_SURFACE_TEMPERATURE_VALUE);
      expect(result.current.sliders[PromptType.ATMOSPHERIC_DENSITY]).toBe(
        Config.VENUS_ATMOSPHERIC_DENSITY_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER_AMOUNT]).toBe(
        Config.VENUS_WATER_AMOUNT_VALUE,
      );
      expect(result.current.sliders[PromptType.SURFACE_UNEVENNESS]).toBe(
        Config.VENUS_SURFACE_UNEVENNESS_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANIC_ACTIVITY]).toBe(
        Config.VENUS_VOLCANIC_ACTIVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.AURORA]).toBe(
        Config.VENUS_AURORA_VALUE,
      );
    });

    it("test_setSliderValueByPlanetType_PlanetType.EARTH", () => {
      const { result } = renderHook(() => useSliderStore());

      act(() => {
        result.current.setSliderValueByPlanetType(PlanetType.EARTH);
      });

      expect(result.current.sliders[PromptType.DIAMETER]).toBe(
        Config.EARTH_DIAMETER_VALUE,
      );
      expect(result.current.sliders[PromptType.GRAVITY]).toBe(
        Config.EARTH_GRAVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.DISTANCE_FROM_SUN]).toBe(
        Config.EARTH_DISTANCE_FROM_SUN_VALUE,
      );
      expect(
        result.current.sliders[PromptType.AVERAGE_SURFACE_TEMPERATURE],
      ).toBe(Config.EARTH_AVERAGE_SURFACE_TEMPERATURE_VALUE);
      expect(result.current.sliders[PromptType.ATMOSPHERIC_DENSITY]).toBe(
        Config.EARTH_ATMOSPHERIC_DENSITY_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER_AMOUNT]).toBe(
        Config.EARTH_WATER_AMOUNT_VALUE,
      );
      expect(result.current.sliders[PromptType.SURFACE_UNEVENNESS]).toBe(
        Config.EARTH_SURFACE_UNEVENNESS_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANIC_ACTIVITY]).toBe(
        Config.EARTH_VOLCANIC_ACTIVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.AURORA]).toBe(
        Config.EARTH_AURORA_VALUE,
      );
    });

    it("test_setSliderValueByPlanetType_PlanetType.MARS", () => {
      const { result } = renderHook(() => useSliderStore());

      act(() => {
        result.current.setSliderValueByPlanetType(PlanetType.MARS);
      });

      expect(result.current.sliders[PromptType.DIAMETER]).toBe(
        Config.MARS_DIAMETER_VALUE,
      );
      expect(result.current.sliders[PromptType.GRAVITY]).toBe(
        Config.MARS_GRAVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.DISTANCE_FROM_SUN]).toBe(
        Config.MARS_DISTANCE_FROM_SUN_VALUE,
      );
      expect(
        result.current.sliders[PromptType.AVERAGE_SURFACE_TEMPERATURE],
      ).toBe(Config.MARS_AVERAGE_SURFACE_TEMPERATURE_VALUE);
      expect(result.current.sliders[PromptType.ATMOSPHERIC_DENSITY]).toBe(
        Config.MARS_ATMOSPHERIC_DENSITY_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER_AMOUNT]).toBe(
        Config.MARS_WATER_AMOUNT_VALUE,
      );
      expect(result.current.sliders[PromptType.SURFACE_UNEVENNESS]).toBe(
        Config.MARS_SURFACE_UNEVENNESS_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANIC_ACTIVITY]).toBe(
        Config.MARS_VOLCANIC_ACTIVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.AURORA]).toBe(
        Config.MARS_AURORA_VALUE,
      );
    });

    it("test_setSliderValueByPlanetType_PlanetType.JUPITER", () => {
      const { result } = renderHook(() => useSliderStore());

      act(() => {
        result.current.setSliderValueByPlanetType(PlanetType.JUPITER);
      });

      expect(result.current.sliders[PromptType.DIAMETER]).toBe(
        Config.JUPITER_DIAMETER_VALUE,
      );
      expect(result.current.sliders[PromptType.GRAVITY]).toBe(
        Config.JUPITER_GRAVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.DISTANCE_FROM_SUN]).toBe(
        Config.JUPITER_DISTANCE_FROM_SUN_VALUE,
      );
      expect(
        result.current.sliders[PromptType.AVERAGE_SURFACE_TEMPERATURE],
      ).toBe(Config.JUPITER_AVERAGE_SURFACE_TEMPERATURE_VALUE);
      expect(result.current.sliders[PromptType.ATMOSPHERIC_DENSITY]).toBe(
        Config.JUPITER_ATMOSPHERIC_DENSITY_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER_AMOUNT]).toBe(
        Config.JUPITER_WATER_AMOUNT_VALUE,
      );
      expect(result.current.sliders[PromptType.SURFACE_UNEVENNESS]).toBe(
        Config.JUPITER_SURFACE_UNEVENNESS_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANIC_ACTIVITY]).toBe(
        Config.JUPITER_VOLCANIC_ACTIVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.AURORA]).toBe(
        Config.JUPITER_AURORA_VALUE,
      );
    });

    it("test_setSliderValueByPlanetType_PlanetType.SATURN", () => {
      const { result } = renderHook(() => useSliderStore());

      act(() => {
        result.current.setSliderValueByPlanetType(PlanetType.SATURN);
      });

      expect(result.current.sliders[PromptType.DIAMETER]).toBe(
        Config.SATURN_DIAMETER_VALUE,
      );
      expect(result.current.sliders[PromptType.GRAVITY]).toBe(
        Config.SATURN_GRAVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.DISTANCE_FROM_SUN]).toBe(
        Config.SATURN_DISTANCE_FROM_SUN_VALUE,
      );
      expect(
        result.current.sliders[PromptType.AVERAGE_SURFACE_TEMPERATURE],
      ).toBe(Config.SATURN_AVERAGE_SURFACE_TEMPERATURE_VALUE);
      expect(result.current.sliders[PromptType.ATMOSPHERIC_DENSITY]).toBe(
        Config.SATURN_ATMOSPHERIC_DENSITY_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER_AMOUNT]).toBe(
        Config.SATURN_WATER_AMOUNT_VALUE,
      );
      expect(result.current.sliders[PromptType.SURFACE_UNEVENNESS]).toBe(
        Config.SATURN_SURFACE_UNEVENNESS_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANIC_ACTIVITY]).toBe(
        Config.SATURN_VOLCANIC_ACTIVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.AURORA]).toBe(
        Config.SATURN_AURORA_VALUE,
      );
    });

    it("test_setSliderValueByPlanetType_PlanetType.URANUS", () => {
      const { result } = renderHook(() => useSliderStore());

      act(() => {
        result.current.setSliderValueByPlanetType(PlanetType.URANUS);
      });

      expect(result.current.sliders[PromptType.DIAMETER]).toBe(
        Config.URANUS_DIAMETER_VALUE,
      );
      expect(result.current.sliders[PromptType.GRAVITY]).toBe(
        Config.URANUS_GRAVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.DISTANCE_FROM_SUN]).toBe(
        Config.URANUS_DISTANCE_FROM_SUN_VALUE,
      );
      expect(
        result.current.sliders[PromptType.AVERAGE_SURFACE_TEMPERATURE],
      ).toBe(Config.URANUS_AVERAGE_SURFACE_TEMPERATURE_VALUE);
      expect(result.current.sliders[PromptType.ATMOSPHERIC_DENSITY]).toBe(
        Config.URANUS_ATMOSPHERIC_DENSITY_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER_AMOUNT]).toBe(
        Config.URANUS_WATER_AMOUNT_VALUE,
      );
      expect(result.current.sliders[PromptType.SURFACE_UNEVENNESS]).toBe(
        Config.URANUS_SURFACE_UNEVENNESS_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANIC_ACTIVITY]).toBe(
        Config.URANUS_VOLCANIC_ACTIVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.AURORA]).toBe(
        Config.URANUS_AURORA_VALUE,
      );
    });

    it("test_setSliderValueByPlanetType_PlanetType.NEPTUNE", () => {
      const { result } = renderHook(() => useSliderStore());

      act(() => {
        result.current.setSliderValueByPlanetType(PlanetType.NEPTUNE);
      });

      expect(result.current.sliders[PromptType.DIAMETER]).toBe(
        Config.NEPTUNE_DIAMETER_VALUE,
      );
      expect(result.current.sliders[PromptType.GRAVITY]).toBe(
        Config.NEPTUNE_GRAVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.DISTANCE_FROM_SUN]).toBe(
        Config.NEPTUNE_DISTANCE_FROM_SUN_VALUE,
      );
      expect(
        result.current.sliders[PromptType.AVERAGE_SURFACE_TEMPERATURE],
      ).toBe(Config.NEPTUNE_AVERAGE_SURFACE_TEMPERATURE_VALUE);
      expect(result.current.sliders[PromptType.ATMOSPHERIC_DENSITY]).toBe(
        Config.NEPTUNE_ATMOSPHERIC_DENSITY_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER_AMOUNT]).toBe(
        Config.NEPTUNE_WATER_AMOUNT_VALUE,
      );
      expect(result.current.sliders[PromptType.SURFACE_UNEVENNESS]).toBe(
        Config.NEPTUNE_SURFACE_UNEVENNESS_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANIC_ACTIVITY]).toBe(
        Config.NEPTUNE_VOLCANIC_ACTIVITY_VALUE,
      );
      expect(result.current.sliders[PromptType.AURORA]).toBe(
        Config.NEPTUNE_AURORA_VALUE,
      );
    });
  });

  describe("usePlanetTypeStore hook", () => {
    it("test_planetType_initialize", () => {
      const { result } = renderHook(() => usePlanetTypeStore());
      expect(result.current.planetType).toBe(PlanetType.EARTH);
    });

    it("test_setPlanetType", () => {
      const { result } = renderHook(() => usePlanetTypeStore());

      act(() => {
        result.current.setPlanetType(PlanetType.MERCURY);
      });

      expect(result.current.planetType).toBe(PlanetType.MERCURY);
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
