import { authTypes } from '../types';

// Actions
import { uiActions } from './ui';

// API
import { api }  from '../../../api';

export const authActions = Object.freeze({
    setToken: (token) => ({
        type:    authTypes.SET_TOKEN,
        payload: token,
    }),

    startFetching:  () => ({ type: authTypes.START_FETCHING }),
    stopFetching:   () => ({ type: authTypes.STOP_FETCHING }),
    updatePassword: (token) => ({
        type:    authTypes.UPDATE_PASSWORD,
        payload: token,
    }),

    updatePasswordAsync: (passwordData) => async (dispatch) => {
        if (!passwordData) {
            return null;
        }
        try {
            dispatch(authActions.startFetching());
            const token = await api.profile.updatePassword(passwordData);
            localStorage.removeItem('token');
            localStorage.setItem('token', token?.data);
            dispatch(authActions.updatePassword(token?.data));
        } catch (error) {
            dispatch(uiActions.setError(error.message));
        } finally {
            dispatch(authActions.stopFetching());
        }
    },
});
