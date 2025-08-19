import PromptType from '../../models/PromptType';

export const toLocaleString = (promptType, value) => {
    if (value === null || value === undefined) {
        return '-';
    }

    switch (promptType) {
        case PromptType.GRAVITY:
            return value.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        default:
            return value.toLocaleString();
    }
};
