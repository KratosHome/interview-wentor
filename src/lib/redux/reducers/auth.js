import { authTypes } from '../types';

const initialState = {
    token:      '',
    isFetching: false,
};

// eslint-disable-next-line default-param-last
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.SET_TOKEN: {
            return {
                ...state,
                token: action.payload,
            };
        }

        case authTypes.START_FETCHING: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case authTypes.STOP_FETCHING: {
            return {
                ...state,
                isFetching: false,
            };
        }
        case authTypes.UPDATE_PASSWORD: {
            return {
                ...state,
                isFetching: false,
                token:      action?.payload,
            };
        }

        default: {
            return state;
        }
    }
};
