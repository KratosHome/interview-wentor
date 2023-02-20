// Core
import React from 'react';
import { Provider }  from 'react-redux';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments
import { store }  from './lib/redux/init/store';

// Context provider
import { queryClient } from './lib';

// App
import { App } from './App';


createRoot(document.getElementById('root')).render(
    <Provider store = { store }>
        <QueryClientProvider client = { queryClient } >
            <Router>
                <App />
            </Router>
            <ReactQueryDevtools initialIsOpen = { false } />
        </QueryClientProvider>
    </Provider>,
);
