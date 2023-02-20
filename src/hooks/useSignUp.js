// Core
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Actions
import { authActions } from '../lib/redux/actions';

// API
import { api } from '../api';

export const useSignUp =  () => {
    const dispatch = useDispatch();

    const navigation = useNavigate();

    const mutationFn = useMutation((user) => {
        return api.auth.signup(user);
    });

    useEffect(() => {
        if (mutationFn.isSuccess) {
            const token = mutationFn.data?.data;
            dispatch(authActions.setToken(token));
            localStorage.setItem('token', token);
            navigation('/feed');
        }
    }, [mutationFn.isSuccess]);

    return mutationFn;
};
