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
      expect(result.current.sliders[PromptType.DISTANCE]).toBe(
        Config.EARTH_DISTANCE_VALUE,
      );
      expect(result.current.sliders[PromptType.TEMPERATURE]).toBe(
        Config.EARTH_TEMPERATURE_VALUE,
      );
      expect(result.current.sliders[PromptType.ATMOSPHERE]).toBe(
        Config.EARTH_ATMOSPHERE_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER]).toBe(
        Config.EARTH_WATER_VALUE,
      );
      expect(result.current.sliders[PromptType.TERRAIN]).toBe(
        Config.EARTH_TERRAIN_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANO]).toBe(
        Config.EARTH_VOLCANO_VALUE,
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
        result.current.setSliderValueByPromptType(PromptType.DISTANCE, 3000);
        result.current.setSliderValueByPromptType(PromptType.TEMPERATURE, 4000);
        result.current.setSliderValueByPromptType(PromptType.ATMOSPHERE, 5000);
        result.current.setSliderValueByPromptType(PromptType.WATER, 6000);
        result.current.setSliderValueByPromptType(PromptType.TERRAIN, 7000);
        result.current.setSliderValueByPromptType(PromptType.VOLCANO, 8000);
        result.current.setSliderValueByPromptType(PromptType.AURORA, 9000);
      });

      expect(result.current.sliders[PromptType.DIAMETER]).toBe(1000);
      expect(result.current.sliders[PromptType.GRAVITY]).toBe(2000);
      expect(result.current.sliders[PromptType.DISTANCE]).toBe(3000);
      expect(result.current.sliders[PromptType.TEMPERATURE]).toBe(4000);
      expect(result.current.sliders[PromptType.ATMOSPHERE]).toBe(5000);
      expect(result.current.sliders[PromptType.WATER]).toBe(6000);
      expect(result.current.sliders[PromptType.TERRAIN]).toBe(7000);
      expect(result.current.sliders[PromptType.VOLCANO]).toBe(8000);
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
      expect(result.current.sliders[PromptType.DISTANCE]).toBe(
        Config.MERCURY_DISTANCE_VALUE,
      );
      expect(result.current.sliders[PromptType.TEMPERATURE]).toBe(
        Config.MERCURY_TEMPERATURE_VALUE,
      );
      expect(result.current.sliders[PromptType.ATMOSPHERE]).toBe(
        Config.MERCURY_ATMOSPHERE_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER]).toBe(
        Config.MERCURY_WATER_VALUE,
      );
      expect(result.current.sliders[PromptType.TERRAIN]).toBe(
        Config.MERCURY_TERRAIN_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANO]).toBe(
        Config.MERCURY_VOLCANO_VALUE,
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
      expect(result.current.sliders[PromptType.DISTANCE]).toBe(
        Config.VENUS_DISTANCE_VALUE,
      );
      expect(result.current.sliders[PromptType.TEMPERATURE]).toBe(
        Config.VENUS_TEMPERATURE_VALUE,
      );
      expect(result.current.sliders[PromptType.ATMOSPHERE]).toBe(
        Config.VENUS_ATMOSPHERE_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER]).toBe(
        Config.VENUS_WATER_VALUE,
      );
      expect(result.current.sliders[PromptType.TERRAIN]).toBe(
        Config.VENUS_TERRAIN_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANO]).toBe(
        Config.VENUS_VOLCANO_VALUE,
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
      expect(result.current.sliders[PromptType.DISTANCE]).toBe(
        Config.EARTH_DISTANCE_VALUE,
      );
      expect(result.current.sliders[PromptType.TEMPERATURE]).toBe(
        Config.EARTH_TEMPERATURE_VALUE,
      );
      expect(result.current.sliders[PromptType.ATMOSPHERE]).toBe(
        Config.EARTH_ATMOSPHERE_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER]).toBe(
        Config.EARTH_WATER_VALUE,
      );
      expect(result.current.sliders[PromptType.TERRAIN]).toBe(
        Config.EARTH_TERRAIN_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANO]).toBe(
        Config.EARTH_VOLCANO_VALUE,
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
      expect(result.current.sliders[PromptType.DISTANCE]).toBe(
        Config.MARS_DISTANCE_VALUE,
      );
      expect(result.current.sliders[PromptType.TEMPERATURE]).toBe(
        Config.MARS_TEMPERATURE_VALUE,
      );
      expect(result.current.sliders[PromptType.ATMOSPHERE]).toBe(
        Config.MARS_ATMOSPHERE_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER]).toBe(
        Config.MARS_WATER_VALUE,
      );
      expect(result.current.sliders[PromptType.TERRAIN]).toBe(
        Config.MARS_TERRAIN_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANO]).toBe(
        Config.MARS_VOLCANO_VALUE,
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
      expect(result.current.sliders[PromptType.DISTANCE]).toBe(
        Config.JUPITER_DISTANCE_VALUE,
      );
      expect(result.current.sliders[PromptType.TEMPERATURE]).toBe(
        Config.JUPITER_TEMPERATURE_VALUE,
      );
      expect(result.current.sliders[PromptType.ATMOSPHERE]).toBe(
        Config.JUPITER_ATMOSPHERE_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER]).toBe(
        Config.JUPITER_WATER_VALUE,
      );
      expect(result.current.sliders[PromptType.TERRAIN]).toBe(
        Config.JUPITER_TERRAIN_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANO]).toBe(
        Config.JUPITER_VOLCANO_VALUE,
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
      expect(result.current.sliders[PromptType.DISTANCE]).toBe(
        Config.SATURN_DISTANCE_VALUE,
      );
      expect(result.current.sliders[PromptType.TEMPERATURE]).toBe(
        Config.SATURN_TEMPERATURE_VALUE,
      );
      expect(result.current.sliders[PromptType.ATMOSPHERE]).toBe(
        Config.SATURN_ATMOSPHERE_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER]).toBe(
        Config.SATURN_WATER_VALUE,
      );
      expect(result.current.sliders[PromptType.TERRAIN]).toBe(
        Config.SATURN_TERRAIN_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANO]).toBe(
        Config.SATURN_VOLCANO_VALUE,
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
      expect(result.current.sliders[PromptType.DISTANCE]).toBe(
        Config.URANUS_DISTANCE_VALUE,
      );
      expect(result.current.sliders[PromptType.TEMPERATURE]).toBe(
        Config.URANUS_TEMPERATURE_VALUE,
      );
      expect(result.current.sliders[PromptType.ATMOSPHERE]).toBe(
        Config.URANUS_ATMOSPHERE_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER]).toBe(
        Config.URANUS_WATER_VALUE,
      );
      expect(result.current.sliders[PromptType.TERRAIN]).toBe(
        Config.URANUS_TERRAIN_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANO]).toBe(
        Config.URANUS_VOLCANO_VALUE,
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
      expect(result.current.sliders[PromptType.DISTANCE]).toBe(
        Config.NEPTUNE_DISTANCE_VALUE,
      );
      expect(result.current.sliders[PromptType.TEMPERATURE]).toBe(
        Config.NEPTUNE_TEMPERATURE_VALUE,
      );
      expect(result.current.sliders[PromptType.ATMOSPHERE]).toBe(
        Config.NEPTUNE_ATMOSPHERE_VALUE,
      );
      expect(result.current.sliders[PromptType.WATER]).toBe(
        Config.NEPTUNE_WATER_VALUE,
      );
      expect(result.current.sliders[PromptType.TERRAIN]).toBe(
        Config.NEPTUNE_TERRAIN_VALUE,
      );
      expect(result.current.sliders[PromptType.VOLCANO]).toBe(
        Config.NEPTUNE_VOLCANO_VALUE,
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
