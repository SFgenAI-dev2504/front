import * as EmptyValidator from './emptyValidator';

export const validateMin = (input, min) => {
    if (!EmptyValidator.validate(input)) {
        return false;
    }

    return length(input) >= min;
};

export const validateMax = (input, max) => {
    if (!EmptyValidator.validate(input)) {
        return false;
    }

    return length(input) <= max;
};

export const validateMinAndMax = (input, min, max) => {
    if (!EmptyValidator.validate(input)) {
        return false;
    }

    return validateMin(input, min) && validateMax(input, max);
};

const length = (input) => {
    const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
    const segments = [...segmenter.segment(input)];
    return segments.length;
};
