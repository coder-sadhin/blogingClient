import {
    createBrowserRouter,
} from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Single from '../Pages/Single';
import Write from '../Pages/Write';


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: ' <ErrorPage />',
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/write',
                element: <Write />
            },
            {
                path: '/blog/:id',
                element: <Single />
            }
        ]
    }
])

export default router;