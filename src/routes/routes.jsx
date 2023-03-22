import {createBrowserRouter} from 'react-router-dom';

//Pages
import App from '../App';
import PrivateHome from '../containers/Home';

import PrivateRegister from '../containers/Register';
import ErrorPage from '../pages/error/Index';
import Login from '../pages/login/Index';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: '/',
                element: <PrivateHome/>
            },
            {
                path: 'home',
                element: <PrivateHome/>
            },
            {
               path: 'login',
               element: <Login/>
            },
            {
                path: 'register',
                element: <PrivateRegister/>
            }
        ]
    }
])