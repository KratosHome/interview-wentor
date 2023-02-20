// Core
import {
    Routes, Route, Navigate,
} from 'react-router-dom';

// Styles
import { ToastContainer, Slide } from 'react-toastify';

// Components
import { Footer } from './components/Footer';
import {
    Feed, LayoutPage, PostCommentsPage, ProfilePage, SignUpPage, LoginPage, NewPasswordPage,
} from './pages';

// Hooks
import { useErrorMessage } from './hooks/useErrorMessage';

export const App = () => {
    useErrorMessage();

    return (
        <>
            <ToastContainer newestOnTop transition = { Slide } />
            <main>
                <Routes>
                    <Route path = '/' element = { <LayoutPage /> } >
                        <Route path = '/' element = { <Navigate to = '/feed' replace /> } />
                        <Route path = '/feed' element = { <Feed /> } />
                        <Route path = '/profile' element = { <ProfilePage /> } />
                        <Route path = '/feed/:postId' element = { <PostCommentsPage /> } />
                        <Route path = '/new-password' element = { <NewPasswordPage /> } />
                    </Route>
                    <Route path = '/signup' element = { <SignUpPage /> } />
                    <Route path = '/login' element = { <LoginPage /> } />
                    <Route path = '*' element = { <Navigate to = '/feed' replace /> } />
                </Routes>
            </main>
            <Footer />
        </>
    );
};
