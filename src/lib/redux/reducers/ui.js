import { uiTypes } from '../types/ui';

const initialState = {
    errorMessage: '',
    error:        false,
};

// eslint-disable-next-line default-param-last
export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case uiTypes.RESET_ERROR: {
            return {
                ...state,
                error:        false,
                errorMessage: '',
            };
        }

        case uiTypes.SET_ERROR: {
            return {
                ...state,
                error:        true,
                errorMessage: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
