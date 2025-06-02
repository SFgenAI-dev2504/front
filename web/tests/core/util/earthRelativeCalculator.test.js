import {
  calcDiameter,
  calcDistanceFromSun,
  calcGravity,
  calcAverageSurfaceTemperature,
} from "../../../src/core/util/earthRelativeCalculator";

describe("earthRelativeCalculator.js tests", () => {
  describe("test_calcDiameter", () => {
    it("test_calcDiameter_PlanetType.MERCURY_input_4879_is_0.38", () => {
      const result = calcDiameter(4879);
      expect(result).toBe("0.38");
    });

    it("test_calcDiameter_PlanetType.VENUS_input_12104_is_0.95", () => {
      const result = calcDiameter(12104);
      expect(result).toBe("0.95");
    });

    it("test_calcDiameter_PlanetType.EARTH_input_12742_is_1.00", () => {
      const result = calcDiameter(12742);
      expect(result).toBe("1.00");
    });

    it("test_calcDiameter_PlanetType.MARS_input_6779_is_0.53", () => {
      const result = calcDiameter(6779);
      expect(result).toBe("0.53");
    });

    it("test_calcDiameter_PlanetType.JUPITER_input_139820_is_10.97", () => {
      const result = calcDiameter(139820);
      expect(result).toBe("10.97");
    });

    it("test_calcDiameter_PlanetType.SATURN_input_116460_is_9.14", () => {
      const result = calcDiameter(116460);
      expect(result).toBe("9.14");
    });

    it("test_calcDiameter_PlanetType.URANUS_input_50724_is_3.98", () => {
      const result = calcDiameter(50724);
      expect(result).toBe("3.98");
    });

    it("test_calcDiameter_PlanetType.NEPTUNE_input_49244_is_3.86", () => {
      const result = calcDiameter(49244);
      expect(result).toBe("3.86");
    });
  });

  describe("test_calcGravity", () => {
    it("test_calcGravity_PlanetType.MERCURY_input_0.38_is_0.38", () => {
      const result = calcGravity(0.38);
      expect(result).toBe("0.38");
    });

    it("test_calcGravity_PlanetType.VENUS_input_0.91_is_0.91", () => {
      const result = calcGravity(0.91);
      expect(result).toBe("0.91");
    });

    it("test_calcGravity_PlanetType.EARTH_input_1.00_is_1.00", () => {
      const result = calcGravity(1.0);
      expect(result).toBe("1.00");
    });

    it("test_calcGravity_PlanetType.MARS_input_0.38_is_0.38", () => {
      const result = calcGravity(0.38);
      expect(result).toBe("0.38");
    });

    it("test_calcGravity_PlanetType.JUPITER_input_2.53_is_2.53", () => {
      const result = calcGravity(2.53);
      expect(result).toBe("2.53");
    });

    it("test_calcGravity_PlanetType.SATURN_input_1.07_is_1.07", () => {
      const result = calcGravity(1.07);
      expect(result).toBe("1.07");
    });

    it("test_calcGravity_PlanetType.URANUS_input_0.89_is_0.89", () => {
      const result = calcGravity(0.89);
      expect(result).toBe("0.89");
    });

    it("test_calcGravity_PlanetType.NEPTUNE_input_1.14_is_1.14", () => {
      const result = calcGravity(1.14);
      expect(result).toBe("1.14");
    });
  });

  describe("test_calcDistanceFromSun", () => {
    it("test_calcDistanceFromSun_PlanetType.MERCURY_input_58_is_0.39", () => {
      const result = calcDistanceFromSun(58);
      expect(result).toBe("0.39");
    });

    it("test_calcDistanceFromSun_PlanetType.VENUS_input_108_is_0.72", () => {
      const result = calcDistanceFromSun(108);
      expect(result).toBe("0.72");
    });

    it("test_calcDistanceFromSun_PlanetType.EARTH_input_150_is_1.00", () => {
      const result = calcDistanceFromSun(150);
      expect(result).toBe("1.00");
    });

    it("test_calcDistanceFromSun_PlanetType.MARS_input_228_is_1.52", () => {
      const result = calcDistanceFromSun(228);
      expect(result).toBe("1.52");
    });

    it("test_calcDistanceFromSun_PlanetType.JUPITER_input_778_is_5.19", () => {
      const result = calcDistanceFromSun(778);
      expect(result).toBe("5.19");
    });

    it("test_calcDistanceFromSun_PlanetType.SATURN_input_1427_is_9.51", () => {
      const result = calcDistanceFromSun(1427);
      expect(result).toBe("9.51");
    });

    it("test_calcDistanceFromSun_PlanetType.URANUS_input_2871_is_19.14", () => {
      const result = calcDistanceFromSun(2871);
      expect(result).toBe("19.14");
    });

    it("test_calcDistanceFromSun_PlanetType.NEPTUNE_input_4495_is_29.97", () => {
      const result = calcDistanceFromSun(4495);
      expect(result).toBe("29.97");
    });
  });

  describe("test_calcAverageSurfaceTemperature", () => {
    it("test_calcAverageSurfaceTemperature_PlanetType.MERCURY_input_167_is_11.13", () => {
      const result = calcAverageSurfaceTemperature(167);
      expect(result).toBe("11.13");
    });

    it("test_calcAverageSurfaceTemperature_PlanetType.VENUS_input_464_is_30.93", () => {
      const result = calcAverageSurfaceTemperature(464);
      expect(result).toBe("30.93");
    });

    it("test_calcAverageSurfaceTemperature_PlanetType.EARTH_input_15_is_1.00", () => {
      const result = calcAverageSurfaceTemperature(15);
      expect(result).toBe("1.00");
    });

    it("test_calcAverageSurfaceTemperature_PlanetType.MARS_input_-65_is_-4.33", () => {
      const result = calcAverageSurfaceTemperature(-65);
      expect(result).toBe("-4.33");
    });

    it("test_calcAverageSurfaceTemperature_PlanetType.JUPITER_input_-110_is_-7.33", () => {
      const result = calcAverageSurfaceTemperature(-110);
      expect(result).toBe("-7.33");
    });

    it("test_calcAverageSurfaceTemperature_PlanetType.SATURN_input_-140_is_-9.33", () => {
      const result = calcAverageSurfaceTemperature(-140);
      expect(result).toBe("-9.33");
    });

    it("test_calcAverageSurfaceTemperature_PlanetType.URANUS_input_-195_is_-13.00", () => {
      const result = calcAverageSurfaceTemperature(-195);
      expect(result).toBe("-13.00");
    });

    it("test_calcAverageSurfaceTemperature_PlanetType.NEPTUNE_input_-200_is_-13.33", () => {
      const result = calcAverageSurfaceTemperature(-200);
      expect(result).toBe("-13.33");
    });
  });
});
