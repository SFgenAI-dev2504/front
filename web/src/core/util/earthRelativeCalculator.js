import * as Config from '../../constant/config';

export const calcDiameter = (input) => {
    return (
        Math.round((input / Config.EARTH_DIAMETER_VALUE) * 100) / 100
    ).toFixed(2);
};

export const calcGravity = (input) => {
    return (
        Math.round((input / Config.EARTH_GRAVITY_VALUE) * 100) / 100
    ).toFixed(2);
};

export const calcDistanceFromSun = (input) => {
    return (
        Math.round((input / Config.EARTH_DISTANCE_FROM_SUN_VALUE) * 100) / 100
    ).toFixed(2);
};

export const calcAverageSurfaceTemperature = (input) => {
    return (
        Math.round(
            (input / Config.EARTH_AVERAGE_SURFACE_TEMPERATURE_VALUE) * 100
        ) / 100
    ).toFixed(2);
};
