import { authTypes } from '../types';

const initialState = {
    token:        '',
    errorMessage: '',
    error:        false,
};

// eslint-disable-next-line default-param-last
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.SET_TOKEN: {
            return {
                ...state,
                token:        action.payload,
                error:        false,
                errorMessage: '',
            };
        }

        default: {
            return state;
        }
    }
};
