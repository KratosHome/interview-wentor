// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

// Hooks
import { useLogin } from '../../../hooks/useLogin';

import { Input } from '../../Input';

import { schema } from './config';

export const Login = () => {
    const login = useLogin();

    const form = useForm({
        mode:     'onBlur',
        resolver: yupResolver(schema),
    });
    const submitForm = form.handleSubmit(async (credentials) => {
        await login.mutateAsync(credentials);
        form.reset();
    });

    useEffect(() => {
        form.setFocus('email');
    }, []);

    return (
        <main>
            <form
                className = 'form centered'
                onSubmit = { submitForm }>
                <div className = 'wrapper centered'>
                    <div className = 'logo'></div>
                    <div>
                        <Input
                            placeholder = 'Электропочта'
                            error = { form.formState.errors.email }
                            type = 'text'
                            autoComplete = 'email'
                            register = { form.register('email') } />
                        <Input
                            placeholder = 'Пароль'
                            error = { form.formState.errors.password }
                            type = 'password'
                            autoComplete = 'current-password'
                            register = { form.register('password') } />
                        <button className = 'loginSubmit' type = 'submit'>Войти</button>
                    </div>
                    <p className = 'options'>Нет аккаунта?
                        <NavLink to = '/signup'>Создать</NavLink>
                    </p>
                </div>
            </form>
        </main>
    );
};
