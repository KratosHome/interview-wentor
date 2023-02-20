// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Hooks
import { useUpdateProfile } from '../../hooks/useUpdateProfile';
import { useProfile } from '../../hooks';

import { Input } from '../Input';

import { schema } from './config';

export const Profile = () => {
    const profile = useProfile();
    const updateProfile = useUpdateProfile();

    const navigate = useNavigate();

    const form = useForm({
        mode:     'onBlur',
        resolver: yupResolver(schema),
    });

    const submitForm = form.handleSubmit(async (data) => {
        await updateProfile.mutateAsync(data);
        profile.refetch();
        form.reset();
        navigate('/feed');
    });


    useEffect(() => {
        form.setFocus('firstName');
    }, []);

    return (
        <form
            className = 'form'
            onSubmit = { submitForm }>
            <div className = 'wrapper'>
                <div>
                    <h1>Привет, { profile.data?.name }</h1>
                    <img src = 'https://placeimg.com/256/256/animals' alt = 'avatar' />
                    <Input
                        placeholder = 'Имя'
                        error = { form.formState.errors.firstName }
                        type = 'text'
                        register = { form.register('firstName') } />
                    <Input
                        placeholder = 'Фамилия'
                        error = { form.formState.errors.lastName }
                        type = 'text'
                        register = { form.register('lastName') } />
                    <button className = 'loginSubmit' type = 'submit'>
                Обновить профиль
                    </button>
                </div>
                <Link to = '/new-password'>Сменить пароль →</Link>
            </div>
        </form>
    );
};
