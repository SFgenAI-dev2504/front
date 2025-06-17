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

export const calcDistance = (input) => {
    return (
        Math.round((input / Config.EARTH_DISTANCE_VALUE) * 100) / 100
    ).toFixed(2);
};

export const calcTemperature = (input) => {
    return (
        Math.round((input / Config.EARTH_TEMPERATURE_VALUE) * 100) / 100
    ).toFixed(2);
};
