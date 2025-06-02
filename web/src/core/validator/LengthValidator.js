import * as EmptyValidator from './EmptyValidator';

export const validateMin = (input, min) => {
    if (!EmptyValidator.validate(input)) {
        return false;
    }

    return input.length >= min;
};

export const validateMax = (input, max) => {
    if (!EmptyValidator.validate(input)) {
        return false;
    }

    return input.length <= max;
};

export const validateMinAndMax = (input, min, max) => {
    if (!EmptyValidator.validate(input)) {
        return false;
    }

    return validateMin(input, min) && validateMax(input, max);
};
