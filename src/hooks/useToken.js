// Core
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// API
import { api } from '../api';

// Actions
import { authActions, uiActions } from '../lib/redux/actions';

export const useToken = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const query = useQuery('token', api.auth.auth, {
        onError: (error) => dispatch(uiActions.setError(error.message)),
    });
    const { data } = query;

    const query = useQuery('token', api.auth.auth, {
        onError: (error) => dispatch(uiActions.setError(error.message)),
    });
    const { data } = query;

    useEffect(() => {
        if (data && data.status === 'success') {
            dispatch(authActions.setToken(data));
        } else {
            navigate('/login');
        }
    }, [data]);

    return (
        data
    );
};
