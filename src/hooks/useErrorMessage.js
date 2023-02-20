// Core
import { useEffect } from 'react';
import { useDispatch, useSelector }  from 'react-redux';

// Styles
import { toast } from 'react-toastify';
import { toastOptions } from '../constants/toastOptions';

// Actions
import { uiActions } from '../lib/redux/actions';

// Selectors
import { getErrorMessage }  from '../lib/redux/selectors/ui';

export const useErrorMessage = () => {
    const errorMessage = useSelector(getErrorMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, toastOptions);

            dispatch(uiActions.resetError());
        }
    }, [errorMessage]);
};
