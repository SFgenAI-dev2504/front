const MAX_RATING = 5;

export const evaluate = (rate) => {
    if (!rate || rate < 1 || rate > 5) {
        return 'ー';
    }

    return `${'☆'.repeat(MAX_RATING - rate)}${'★'.repeat(rate)}`;
};
