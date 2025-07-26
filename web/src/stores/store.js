import { create } from 'zustand';
import * as Config from '../constant/config';
import PlanetType from '../models/PlanetType';
import PromptType from '../models/PromptType';
import FadeState from '../models/FadeState';

export const useSliderStore = create((set) => ({
    sliders: {
        [PromptType.DIAMETER]: Config.EARTH_DIAMETER_VALUE,
        [PromptType.GRAVITY]: Config.EARTH_GRAVITY_VALUE,
        [PromptType.DISTANCE]: Config.EARTH_DISTANCE_VALUE,
        [PromptType.TEMPERATURE]: Config.EARTH_TEMPERATURE_VALUE,
        [PromptType.ATMOSPHERE]: Config.EARTH_ATMOSPHERE_VALUE,
        [PromptType.WATER]: Config.EARTH_WATER_VALUE,
        [PromptType.TERRAIN]: Config.EARTH_TERRAIN_VALUE,
        [PromptType.VOLCANO]: Config.EARTH_VOLCANO_VALUE,
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
                    newSliders[PromptType.DISTANCE] =
                        Config.MERCURY_DISTANCE_VALUE;
                    newSliders[PromptType.TEMPERATURE] =
                        Config.MERCURY_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERE] =
                        Config.MERCURY_ATMOSPHERE_VALUE;
                    newSliders[PromptType.WATER] = Config.MERCURY_WATER_VALUE;
                    newSliders[PromptType.TERRAIN] =
                        Config.MERCURY_TERRAIN_VALUE;
                    newSliders[PromptType.VOLCANO] =
                        Config.MERCURY_VOLCANO_VALUE;
                    newSliders[PromptType.AURORA] = Config.MERCURY_AURORA_VALUE;
                    break;
                case PlanetType.VENUS:
                    newSliders[PromptType.DIAMETER] =
                        Config.VENUS_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] = Config.VENUS_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE] =
                        Config.VENUS_DISTANCE_VALUE;
                    newSliders[PromptType.TEMPERATURE] =
                        Config.VENUS_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERE] =
                        Config.VENUS_ATMOSPHERE_VALUE;
                    newSliders[PromptType.WATER] = Config.VENUS_WATER_VALUE;
                    newSliders[PromptType.TERRAIN] = Config.VENUS_TERRAIN_VALUE;
                    newSliders[PromptType.VOLCANO] = Config.VENUS_VOLCANO_VALUE;
                    newSliders[PromptType.AURORA] = Config.VENUS_AURORA_VALUE;
                    break;
                case PlanetType.MARS:
                    newSliders[PromptType.DIAMETER] =
                        Config.MARS_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] = Config.MARS_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE] =
                        Config.MARS_DISTANCE_VALUE;
                    newSliders[PromptType.TEMPERATURE] =
                        Config.MARS_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERE] =
                        Config.MARS_ATMOSPHERE_VALUE;
                    newSliders[PromptType.WATER] = Config.MARS_WATER_VALUE;
                    newSliders[PromptType.TERRAIN] = Config.MARS_TERRAIN_VALUE;
                    newSliders[PromptType.VOLCANO] = Config.MARS_VOLCANO_VALUE;
                    newSliders[PromptType.AURORA] = Config.MARS_AURORA_VALUE;
                    break;
                case PlanetType.JUPITER:
                    newSliders[PromptType.DIAMETER] =
                        Config.JUPITER_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] =
                        Config.JUPITER_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE] =
                        Config.JUPITER_DISTANCE_VALUE;
                    newSliders[PromptType.TEMPERATURE] =
                        Config.JUPITER_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERE] =
                        Config.JUPITER_ATMOSPHERE_VALUE;
                    newSliders[PromptType.WATER] = Config.JUPITER_WATER_VALUE;
                    newSliders[PromptType.TERRAIN] =
                        Config.JUPITER_TERRAIN_VALUE;
                    newSliders[PromptType.VOLCANO] =
                        Config.JUPITER_VOLCANO_VALUE;
                    newSliders[PromptType.AURORA] = Config.JUPITER_AURORA_VALUE;
                    break;
                case PlanetType.SATURN:
                    newSliders[PromptType.DIAMETER] =
                        Config.SATURN_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] =
                        Config.SATURN_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE] =
                        Config.SATURN_DISTANCE_VALUE;
                    newSliders[PromptType.TEMPERATURE] =
                        Config.SATURN_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERE] =
                        Config.SATURN_ATMOSPHERE_VALUE;
                    newSliders[PromptType.WATER] = Config.SATURN_WATER_VALUE;
                    newSliders[PromptType.TERRAIN] =
                        Config.SATURN_TERRAIN_VALUE;
                    newSliders[PromptType.VOLCANO] =
                        Config.SATURN_VOLCANO_VALUE;
                    newSliders[PromptType.AURORA] = Config.SATURN_AURORA_VALUE;
                    break;
                case PlanetType.URANUS:
                    newSliders[PromptType.DIAMETER] =
                        Config.URANUS_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] =
                        Config.URANUS_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE] =
                        Config.URANUS_DISTANCE_VALUE;
                    newSliders[PromptType.TEMPERATURE] =
                        Config.URANUS_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERE] =
                        Config.URANUS_ATMOSPHERE_VALUE;
                    newSliders[PromptType.WATER] = Config.URANUS_WATER_VALUE;
                    newSliders[PromptType.TERRAIN] =
                        Config.URANUS_TERRAIN_VALUE;
                    newSliders[PromptType.VOLCANO] =
                        Config.URANUS_VOLCANO_VALUE;
                    newSliders[PromptType.AURORA] = Config.URANUS_AURORA_VALUE;
                    break;
                case PlanetType.NEPTUNE:
                    newSliders[PromptType.DIAMETER] =
                        Config.NEPTUNE_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] =
                        Config.NEPTUNE_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE] =
                        Config.NEPTUNE_DISTANCE_VALUE;
                    newSliders[PromptType.TEMPERATURE] =
                        Config.NEPTUNE_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERE] =
                        Config.NEPTUNE_ATMOSPHERE_VALUE;
                    newSliders[PromptType.WATER] = Config.NEPTUNE_WATER_VALUE;
                    newSliders[PromptType.TERRAIN] =
                        Config.NEPTUNE_TERRAIN_VALUE;
                    newSliders[PromptType.VOLCANO] =
                        Config.NEPTUNE_VOLCANO_VALUE;
                    newSliders[PromptType.AURORA] = Config.NEPTUNE_AURORA_VALUE;
                    break;
                // 上記以外は「PlanetType.EARTH」とする。
                default:
                    newSliders[PromptType.DIAMETER] =
                        Config.EARTH_DIAMETER_VALUE;
                    newSliders[PromptType.GRAVITY] = Config.EARTH_GRAVITY_VALUE;
                    newSliders[PromptType.DISTANCE] =
                        Config.EARTH_DISTANCE_VALUE;
                    newSliders[PromptType.TEMPERATURE] =
                        Config.EARTH_TEMPERATURE_VALUE;
                    newSliders[PromptType.ATMOSPHERE] =
                        Config.EARTH_ATMOSPHERE_VALUE;
                    newSliders[PromptType.WATER] = Config.EARTH_WATER_VALUE;
                    newSliders[PromptType.TERRAIN] = Config.EARTH_TERRAIN_VALUE;
                    newSliders[PromptType.VOLCANO] = Config.EARTH_VOLCANO_VALUE;
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

export const useGenerateFadeStore = create((set) => ({
    value: FadeState.NO_FADE,
    setValue: (value) =>
        set(() => {
            return { value: value };
        }),
}));
