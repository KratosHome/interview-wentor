import { uiTypes } from '../types/ui';

export const uiActions = Object.freeze({
    resetError: () => ({ type: uiTypes.RESET_ERROR }),

    setError: (message) => ({
        type:    uiTypes.SET_ERROR,
        error:   true,
        payload: message,
    }),
});
