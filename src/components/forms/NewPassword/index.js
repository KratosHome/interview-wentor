// Core
import { Link, useNavigate }  from 'react-router-dom';
import { useDispatch, useSelector }  from 'react-redux';
import { useForm }  from 'react-hook-form';
import { useEffect } from 'react';

// Selectors
import { getPasswordState, getToken } from '../../../lib/redux/selectors/auth';

// Actions
import { authActions } from '../../../lib/redux/actions/auth';

export const NewPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(getToken);
    const resetPassword = useSelector(getPasswordState);

    const form = useForm({
        mode: 'onBlur',
    });

    useEffect(() => {
        if (resetPassword.token !== token) {
            dispatch(authActions.setToken(resetPassword.token));
        }
    }, [resetPassword.token]);

    const handleSubmit = form.handleSubmit(async (passwordData) => {
        await dispatch(authActions.updatePasswordAsync(passwordData));
        navigate('/feed');
    });

    return (
        <form className = 'form' onSubmit = { handleSubmit }>
            <div className = 'wrapper'>
                <div>
                    <h1>Смена пароля</h1>
                    <label>
                        <div>
                            <span className = 'error-message'></span>
                        </div>
                        <input
                            placeholder = 'Старый пароль' name = 'oldPassword'
                            type = 'password'
                            { ...form.register('oldPassword') } />
                    </label>
                    <label>
                        <div>
                            <span className = 'error-message'></span>
                        </div>
                        <input
                            placeholder = 'Новый пароль' name = 'newPassword'
                            type = 'password'
                            { ...form.register('newPassword') } />
                    </label>
                    <button className = 'loginSubmit' type = 'submit'>Сменить пароль</button>
                </div>
                <Link to = '/profile'>← Назад</Link>
            </div>
        </form>
    );
};
