import { Outlet } from 'react-router-dom';
import { Navigation } from '../../components/Navigation';

export const LayoutPage = () => {
    return (
        <>
            <main>
                <div className = 'feed-wrapper'>
                    <div className = 'container'>
                        <Navigation />
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    );
};
