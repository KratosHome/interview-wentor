// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Hooks
import { useSignUp } from '../../../hooks/useSignUp';

import { schema } from './config';

import { Input } from '../../Input';

export const SignUp = () => {
    const signup = useSignUp();

    const form = useForm({
        mode:     'onBlur',
        resolver: yupResolver(schema),
    });

    const submitForm = form.handleSubmit(async (data) => {
        const { confirmPassword, ...user } = data;
        await signup.mutateAsync(user);
        form.reset();
    });

    useEffect(() => {
        form.setFocus('email');
    }, []);

    return (
        <form
            className = 'form centered'
            onSubmit = { submitForm }>
            <div className = 'wrapper centered'>
                <div className = 'logo'></div>
                <div>
                    <Input
                        placeholder = 'Имя'
                        error = { form.formState.errors.name }
                        type = 'text'
                        autoComplete = 'name'
                        register = { form.register('name') } />

                    <Input
                        placeholder = 'Почта'
                        error = { form.formState.errors.email }
                        type = 'email'
                        autoComplete = 'email'
                        register = { form.register('email') } />

                    <Input
                        placeholder = 'Пароль'
                        error = { form.formState.errors.password }
                        type = 'password'
                        autoComplete = 'current-password'
                        register = { form.register('password') } />

                    <Input
                        placeholder = 'Пароль'
                        error = { form.formState.errors.confirmPassword }
                        type = 'password'
                        register = { form.register('confirmPassword') } />

                    <button className = 'signupSubmit' type = 'submit'>Создать аккаунт</button>
                </div>
                <p className = 'options'>Есть аккаунт?
                    <NavLink to = '/login'>Войти</NavLink>
                </p>
            </div>
        </form>
    );
};
