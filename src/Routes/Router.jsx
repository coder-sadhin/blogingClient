import {
    createBrowserRouter,
} from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Single from '../Pages/Blogs/Single';
import Write from '../Pages/Blogs/Write';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import WriterProfile from '../Pages/Writer/Profile';
import Verification from '../utils/Verification';
import VerifyPage from '../utils/VerifyPage';
import PrivateRoutes from './PrivateRoutes';


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
                path: '/writer/register',
                element: <Register />
            },
            {
                path: '/writer/login',
                element: <Login />
            },
            {
                path: '/write',
                element: <PrivateRoutes><Write /></PrivateRoutes>
            },
            {
                path: '/blog/:id',
                element: <Single />
            },
            {
                path: '/writer/profile',
                element: <PrivateRoutes><WriterProfile /></PrivateRoutes>
            },
            {
                path: '/writer/verification',
                element: <Verification />
            },
            {
                path: '/writer/verify',
                element: <VerifyPage />
            }
        ]
    }
])

export default router;