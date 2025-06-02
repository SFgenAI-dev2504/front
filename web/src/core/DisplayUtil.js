export const toLocaleString = (value) => {
    if (value === null || value === undefined) {
        return '-';
    }

    return Math.abs(value).toLocaleString();
};

export const to2DecimalString = (value) => {
    if (value === null || value === undefined) {
        return '-';
    }

    return Math.abs(value).toLocaleString('ja-JP', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};

export const formatString = (value) => {
    if (Number.isInteger(value)) {
        return toLocaleString(value);
    } else {
        return to2DecimalString(value);
    }
};
