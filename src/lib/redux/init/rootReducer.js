import { combineReducers } from 'redux';

// Reducers
import {
    authReducer as auth,
    postsReducer as posts,
    uiReducer as ui,
} from '../reducers';

export const rootReducer = combineReducers({
    auth,
    posts,
    ui,
});
