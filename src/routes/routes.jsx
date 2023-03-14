import {createBrowserRouter} from 'react-router-dom';

//Pages
import App from '../App';
import PrivateHome from '../containers/Home';
import PrivateLogin from '../containers/Login';
import PrivateRegister from '../containers/Register';
import ErrorPage from '../pages/error/Index';


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
               element: <PrivateLogin/>
            },
            {
                path: 'register',
                element: <PrivateRegister/>
            }
        ]
    }
])