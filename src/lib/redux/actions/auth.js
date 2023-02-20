import { authTypes } from '../types';

export const authActions = Object.freeze({

    setToken: (token) => ({
        type:    authTypes.SET_TOKEN,
        payload: token,
    }),
});
