// Core
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Actions
import { authActions, uiActions } from '../lib/redux/actions';

// API
import { api } from '../api/api';

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mutationFn = useMutation((credential) => {
        return api.auth.login(credential);
    }, {
        onError(error) {
            const { response } = error;

            if (response?.status === 401) {
                dispatch(uiActions.setError('Данные не валидны.'));
            } else {
                dispatch(uiActions.setError('Ошибка запроса.'));
            }
        },
    });

    useEffect(() => {
        if (mutationFn.isSuccess) {
            const data = mutationFn.data?.data;

            dispatch(authActions.setToken(data));
            localStorage.setItem('token', data);
            navigate('/feed');
        }
    }, [mutationFn.isSuccess]);

    return mutationFn;
};
