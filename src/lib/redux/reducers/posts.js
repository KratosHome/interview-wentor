import { postTypes } from '../types';

const initialState = {
    isPostOpen: false,
    postId:     '',
};

// eslint-disable-next-line default-param-last
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case postTypes.SET_SELECTED_POST_ID: {
            return {
                ...state,
                postId: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
