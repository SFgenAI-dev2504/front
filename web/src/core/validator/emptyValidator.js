export const validate = (input) => {
    if (input === null || input === undefined) {
        return false;
    }

    return input.length !== 0;
};
