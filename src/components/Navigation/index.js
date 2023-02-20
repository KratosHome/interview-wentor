// Core
import { NavLink, useNavigate } from 'react-router-dom';

// Hooks
import { useProfile } from '../../hooks';

export const Navigation = () => {
    const profile =  useProfile();
    const navigation = useNavigate();

    const handleClick = () => navigation('/login');

    return (
        <div>
            <div className = 'navigation-profile'>
                <div className = 'profile-wrapper'>
                    <img
                        src = 'https://placeimg.com/256/256/animals'
                        alt = 'avatar'
                        className = 'navigation-avatar' />
                    <div className = 'user-status'>
                        <div className = 'status online'>
                            <span></span>
                        </div>
                    </div>
                </div>
                { profile.data?.name }
            </div>
            <NavLink
                to = '/feed'
                className = { 'navigation-item' }
                aria-current = 'page'>Стена</NavLink>
            <NavLink
                to = '/profile'
                className = { 'navigation-item' }
                aria-current = 'page'>Профиль</NavLink>
            <button onClick = { handleClick } className = 'logout'>Выйти</button>
        </div>

    );
};
