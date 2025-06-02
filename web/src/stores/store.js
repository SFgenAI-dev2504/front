import { create } from 'zustand';
import * as Config from '../constant/config';
import PlanetType from '../models/PlanetType';
import PromptType from '../models/PromptType';

export const useSliderStore = create((set) => ({
    sliders: {
        [PromptType.DIAMETER]: Config.EARTH_DIAMETER_VALUE,
        [PromptType.GRAVITY]: Config.EARTH_GRAVITY_VALUE,
        [PromptType.DISTANCE_FROM_SUN]: Config.EARTH_DISTANCE_FROM_SUN_VALUE,
        [PromptType.AVERAGE_SURFACE_TEMPERATURE]:
            Config.EARTH_AVERAGE_SURFACE_TEMPERATURE_VALUE,
        [PromptType.ATMOSPHERIC_DENSITY]:
            Config.EARTH_ATMOSPHERIC_DENSITY_VALUE,
        [PromptType.WATER_AMOUNT]: Config.EARTH_WATER_AMOUNT_VALUE,
        [PromptType.SURFACE_UNEVENNESS]: Config.EARTH_SURFACE_UNEVENNESS_VALUE,
        [PromptType.VOLCANIC_ACTIVITY]: Config.EARTH_VOLCANIC_ACTIVITY_VALUE,
        [PromptType.AURORA]: Config.EARTH_AURORA_VALUE,
    },
    setSliderValueByPromptType: (promptType, value) =>
        set((state) => {
            const newSliders = { ...state.sliders };
            newSliders[promptType] = value;
            return { sliders: newSliders };
        }),
    setSliderValueByPlanetType: (type) =>
        set((state) => {
            const newSliders = { ...state.sliders };
            switch (type) {
                case PlanetType.MERCURY:
                    newSliders[PromptType.DIAMETER] =
                        Config.MERCURY_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] =
                        Config.MERCURY_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE_FROM_SUN] =
                        Config.MERCURY_DISTANCE_FROM_SUN_VALUE;
                    newSliders[PromptType.AVERAGE_SURFACE_TEMPERATURE] =
                        Config.MERCURY_AVERAGE_SURFACE_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERIC_DENSITY] =
                        Config.MERCURY_ATMOSPHERIC_DENSITY_VALUE;
                    newSliders[PromptType.WATER_AMOUNT] =
                        Config.MERCURY_WATER_AMOUNT_VALUE;
                    newSliders[PromptType.SURFACE_UNEVENNESS] =
                        Config.MERCURY_SURFACE_UNEVENNESS_VALUE;
                    newSliders[PromptType.VOLCANIC_ACTIVITY] =
                        Config.MERCURY_VOLCANIC_ACTIVITY_VALUE;
                    newSliders[PromptType.AURORA] = Config.MERCURY_AURORA_VALUE;
                    break;
                case PlanetType.VENUS:
                    newSliders[PromptType.DIAMETER] =
                        Config.VENUS_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] = Config.VENUS_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE_FROM_SUN] =
                        Config.VENUS_DISTANCE_FROM_SUN_VALUE;
                    newSliders[PromptType.AVERAGE_SURFACE_TEMPERATURE] =
                        Config.VENUS_AVERAGE_SURFACE_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERIC_DENSITY] =
                        Config.VENUS_ATMOSPHERIC_DENSITY_VALUE;
                    newSliders[PromptType.WATER_AMOUNT] =
                        Config.VENUS_WATER_AMOUNT_VALUE;
                    newSliders[PromptType.SURFACE_UNEVENNESS] =
                        Config.VENUS_SURFACE_UNEVENNESS_VALUE;
                    newSliders[PromptType.VOLCANIC_ACTIVITY] =
                        Config.VENUS_VOLCANIC_ACTIVITY_VALUE;
                    newSliders[PromptType.AURORA] = Config.VENUS_AURORA_VALUE;
                    break;
                case PlanetType.MARS:
                    newSliders[PromptType.DIAMETER] =
                        Config.MARS_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] = Config.MARS_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE_FROM_SUN] =
                        Config.MARS_DISTANCE_FROM_SUN_VALUE;
                    newSliders[PromptType.AVERAGE_SURFACE_TEMPERATURE] =
                        Config.MARS_AVERAGE_SURFACE_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERIC_DENSITY] =
                        Config.MARS_ATMOSPHERIC_DENSITY_VALUE;
                    newSliders[PromptType.WATER_AMOUNT] =
                        Config.MARS_WATER_AMOUNT_VALUE;
                    newSliders[PromptType.SURFACE_UNEVENNESS] =
                        Config.MARS_SURFACE_UNEVENNESS_VALUE;
                    newSliders[PromptType.VOLCANIC_ACTIVITY] =
                        Config.MARS_VOLCANIC_ACTIVITY_VALUE;
                    newSliders[PromptType.AURORA] = Config.MARS_AURORA_VALUE;
                    break;
                case PlanetType.JUPITER:
                    newSliders[PromptType.DIAMETER] =
                        Config.JUPITER_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] =
                        Config.JUPITER_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE_FROM_SUN] =
                        Config.JUPITER_DISTANCE_FROM_SUN_VALUE;
                    newSliders[PromptType.AVERAGE_SURFACE_TEMPERATURE] =
                        Config.JUPITER_AVERAGE_SURFACE_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERIC_DENSITY] =
                        Config.JUPITER_ATMOSPHERIC_DENSITY_VALUE;
                    newSliders[PromptType.WATER_AMOUNT] =
                        Config.JUPITER_WATER_AMOUNT_VALUE;
                    newSliders[PromptType.SURFACE_UNEVENNESS] =
                        Config.JUPITER_SURFACE_UNEVENNESS_VALUE;
                    newSliders[PromptType.VOLCANIC_ACTIVITY] =
                        Config.JUPITER_VOLCANIC_ACTIVITY_VALUE;
                    newSliders[PromptType.AURORA] = Config.JUPITER_AURORA_VALUE;
                    break;
                case PlanetType.SATURN:
                    newSliders[PromptType.DIAMETER] =
                        Config.SATURN_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] =
                        Config.SATURN_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE_FROM_SUN] =
                        Config.SATURN_DISTANCE_FROM_SUN_VALUE;
                    newSliders[PromptType.AVERAGE_SURFACE_TEMPERATURE] =
                        Config.SATURN_AVERAGE_SURFACE_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERIC_DENSITY] =
                        Config.SATURN_ATMOSPHERIC_DENSITY_VALUE;
                    newSliders[PromptType.WATER_AMOUNT] =
                        Config.SATURN_WATER_AMOUNT_VALUE;
                    newSliders[PromptType.SURFACE_UNEVENNESS] =
                        Config.SATURN_SURFACE_UNEVENNESS_VALUE;
                    newSliders[PromptType.VOLCANIC_ACTIVITY] =
                        Config.SATURN_VOLCANIC_ACTIVITY_VALUE;
                    newSliders[PromptType.AURORA] = Config.SATURN_AURORA_VALUE;
                    break;
                case PlanetType.URANUS:
                    newSliders[PromptType.DIAMETER] =
                        Config.URANUS_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] =
                        Config.URANUS_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE_FROM_SUN] =
                        Config.URANUS_DISTANCE_FROM_THE_SUN_VALUE;
                    newSliders[PromptType.AVERAGE_SURFACE_TEMPERATURE] =
                        Config.URANUS_AVERAGE_SURFACE_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERIC_DENSITY] =
                        Config.URANUS_ATMOSPHERIC_DENSITY_VALUE;
                    newSliders[PromptType.WATER_AMOUNT] =
                        Config.URANUS_WATER_AMOUNT_VALUE;
                    newSliders[PromptType.SURFACE_UNEVENNESS] =
                        Config.URANUS_SURFACE_UNEVENNESS_VALUE;
                    newSliders[PromptType.VOLCANIC_ACTIVITY] =
                        Config.URANUS_VOLCANIC_ACTIVITY_VALUE;
                    newSliders[PromptType.AURORA] = Config.URANUS_AURORA_VALUE;
                    break;
                case PlanetType.NEPTUNE:
                    newSliders[PromptType.DIAMETER] =
                        Config.NEPTUNE_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] =
                        Config.NEPTUNE_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE_FROM_SUN] =
                        Config.NEPTUNE_DISTANCE_FROM_SUN_VALUE;
                    newSliders[PromptType.AVERAGE_SURFACE_TEMPERATURE] =
                        Config.NEPTUNE_AVERAGE_SURFACE_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERIC_DENSITY] =
                        Config.NEPTUNE_ATMOSPHERIC_DENSITY_VALUE;
                    newSliders[PromptType.WATER_AMOUNT] =
                        Config.NEPTUNE_WATER_AMOUNT_VALUE;
                    newSliders[PromptType.SURFACE_UNEVENNESS] =
                        Config.NEPTUNE_SURFACE_UNEVENNESS_VALUE;
                    newSliders[PromptType.VOLCANIC_ACTIVITY] =
                        Config.NEPTUNE_VOLCANIC_ACTIVITY_VALUE;
                    newSliders[PromptType.AURORA] = Config.NEPTUNE_AURORA_VALUE;
                    break;
                // 上記以外は「PlanetType.EARTH」とする。
                default:
                    newSliders[PromptType.DIAMETER] =
                        Config.EARTH_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] = Config.EARTH_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE_FROM_SUN] =
                        Config.EARTH_DISTANCE_FROM_SUN_VALUE;
                    newSliders[PromptType.AVERAGE_SURFACE_TEMPERATURE] =
                        Config.EARTH_AVERAGE_SURFACE_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERIC_DENSITY] =
                        Config.EARTH_ATMOSPHERIC_DENSITY_VALUE;
                    newSliders[PromptType.WATER_AMOUNT] =
                        Config.EARTH_WATER_AMOUNT_VALUE;
                    newSliders[PromptType.SURFACE_UNEVENNESS] =
                        Config.EARTH_SURFACE_UNEVENNESS_VALUE;
                    newSliders[PromptType.VOLCANIC_ACTIVITY] =
                        Config.EARTH_VOLCANIC_ACTIVITY_VALUE;
                    newSliders[PromptType.AURORA] = Config.EARTH_AURORA_VALUE;
                    break;
            }
            return { sliders: newSliders };
        }),
}));

export const usePlanetTypeStore = create((set) => ({
    planetType: PlanetType.EARTH,
    setPlanetType: (type) =>
        set(() => {
            return { planetType: type };
        }),
}));

export const usePlanetNameStore = create((set) => ({
    planetName: '',
    setPlanetName: (value) =>
        set(() => {
            return { planetName: value };
        }),
}));
