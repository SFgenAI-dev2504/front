import PlanetType from '../models/PlanetType';
import * as Config from '../constant/config';

export const calcDiameter = (planetType, input) => {
    if (isZeroInputValue(input)) {
        return undefined;
    }

    switch (planetType) {
        case PlanetType.MERCURY:
            return (
                Math.round((Config.MERCURY_DIAMETER_VALUE / input) * 1000) /
                1000
            );
        case PlanetType.VENUS:
            return (
                Math.round((Config.VENUS_DIAMETER_VALUE / input) * 1000) / 1000
            );
        case PlanetType.EARTH:
            return (
                Math.round((Config.EARTH_DIAMETER_VALUE / input) * 1000) / 1000
            );
        case PlanetType.MARS:
            return (
                Math.round((Config.MARS_DIAMETER_VALUE / input) * 1000) / 1000
            );
        case PlanetType.JUPITER:
            return (
                Math.round((Config.JUPITER_DIAMETER_VALUE / input) * 1000) /
                1000
            );
        case PlanetType.SATURN:
            return (
                Math.round((Config.SATURN_DIAMETER_VALUE / input) * 1000) / 1000
            );
        case PlanetType.URANUS:
            return (
                Math.round((Config.URANUS_DIAMETER_VALUE / input) * 1000) / 1000
            );
        case PlanetType.NEPTUNE:
            return (
                Math.round((Config.NEPTUNE_DIAMETER_VALUE / input) * 1000) /
                1000
            );
        default:
            return null;
    }
};

export const calcGravity = (planetType, input) => {
    if (isZeroInputValue(input)) {
        return undefined;
    }

    switch (planetType) {
        case PlanetType.MERCURY:
            return (
                Math.round((Config.MERCURY_GRAVITY_VALUE / input) * 1000) / 1000
            );
        case PlanetType.VENUS:
            return (
                Math.round((Config.VENUS_GRAVITY_VALUE / input) * 1000) / 1000
            );
        case PlanetType.EARTH:
            return (
                Math.round((Config.EARTH_GRAVITY_VALUE / input) * 1000) / 1000
            );
        case PlanetType.MARS:
            return (
                Math.round((Config.MARS_GRAVITY_VALUE / input) * 1000) / 1000
            );
        case PlanetType.JUPITER:
            return (
                Math.round((Config.JUPITER_GRAVITY_VALUE / input) * 1000) / 1000
            );
        case PlanetType.SATURN:
            return (
                Math.round((Config.SATURN_GRAVITY_VALUE / input) * 1000) / 1000
            );
        case PlanetType.URANUS:
            return (
                Math.round((Config.URANUS_GRAVITY_VALUE / input) * 1000) / 1000
            );
        case PlanetType.NEPTUNE:
            return (
                Math.round((Config.NEPTUNE_GRAVITY_VALUE / input) * 1000) / 1000
            );
        default:
            return null;
    }
};

export const calcDistanceFromSun = (planetType, input) => {
    if (isZeroInputValue(input)) {
        return undefined;
    }

    switch (planetType) {
        case PlanetType.MERCURY:
            return (
                Math.round(
                    (Config.MERCURY_DISTANCE_FROM_SUN_VALUE / input) * 1000
                ) / 1000
            );
        case PlanetType.VENUS:
            return (
                Math.round(
                    (Config.VENUS_DISTANCE_FROM_SUN_VALUE / input) * 1000
                ) / 1000
            );
        case PlanetType.EARTH:
            return (
                Math.round(
                    (Config.EARTH_DISTANCE_FROM_SUN_VALUE / input) * 1000
                ) / 1000
            );
        case PlanetType.MARS:
            return (
                Math.round(
                    (Config.MARS_DISTANCE_FROM_SUN_VALUE / input) * 1000
                ) / 1000
            );
        case PlanetType.JUPITER:
            return (
                Math.round(
                    (Config.JUPITER_DISTANCE_FROM_SUN_VALUE / input) * 1000
                ) / 1000
            );
        case PlanetType.SATURN:
            return (
                Math.round(
                    (Config.SATURN_DISTANCE_FROM_SUN_VALUE / input) * 1000
                ) / 1000
            );
        case PlanetType.URANUS:
            return (
                Math.round(
                    (Config.URANUS_DISTANCE_FROM_THE_SUN_VALUE / input) * 1000
                ) / 1000
            );
        case PlanetType.NEPTUNE:
            return (
                Math.round(
                    (Config.NEPTUNE_DISTANCE_FROM_SUN_VALUE / input) * 1000
                ) / 1000
            );
        default:
            return null;
    }
};

export const calcAverageSurfaceTemperature = (planetType, input) => {
    if (isZeroInputValue(input)) {
        return undefined;
    }

    switch (planetType) {
        case PlanetType.MERCURY:
            return (
                Math.round(
                    (Config.MERCURY_AVERAGE_SURFACE_TEMPERATURE_VALUE / input) *
                        1000
                ) / 1000
            );
        case PlanetType.VENUS:
            return (
                Math.round(
                    (Config.VENUS_AVERAGE_SURFACE_TEMPERATURE_VALUE / input) *
                        1000
                ) / 1000
            );
        case PlanetType.EARTH:
            return (
                Math.round(
                    (Config.EARTH_AVERAGE_SURFACE_TEMPERATURE_VALUE / input) *
                        1000
                ) / 1000
            );
        case PlanetType.MARS:
            return (
                Math.round(
                    (Config.MARS_AVERAGE_SURFACE_TEMPERATURE_VALUE / input) *
                        1000
                ) / 1000
            );
        case PlanetType.JUPITER:
            return (
                Math.round(
                    (Config.JUPITER_AVERAGE_SURFACE_TEMPERATURE_VALUE / input) *
                        1000
                ) / 1000
            );
        case PlanetType.SATURN:
            return (
                Math.round(
                    (Config.SATURN_AVERAGE_SURFACE_TEMPERATURE_VALUE / input) *
                        1000
                ) / 1000
            );
        case PlanetType.URANUS:
            return (
                Math.round(
                    (Config.URANUS_AVERAGE_SURFACE_TEMPERATURE_VALUE / input) *
                        1000
                ) / 1000
            );
        case PlanetType.NEPTUNE:
            return (
                Math.round(
                    (Config.NEPTUNE_AVERAGE_SURFACE_TEMPERATURE_VALUE / input) *
                        1000
                ) / 1000
            );
        default:
            return null;
    }
};

const isZeroInputValue = (input) => {
    return input === 0;
};
