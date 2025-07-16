export const validate = (input) => {
    const regex = /^[ァ-ヶーA-Z]+$/;
    return regex.test(input);
};
