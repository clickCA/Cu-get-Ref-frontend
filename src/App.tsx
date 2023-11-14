import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import UpdateProfilePage from './pages/UpdateProfilePage'
import ReviewPage from './pages/ReviewPage'
import AddCoursePage from './pages/AddCoursePage'
import AllCoursePage from './pages/AllCoursePage'
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'
import PublicLayout from './layout/PublicLayout'
import PrivateLayout from './layout/PrivateLayout'
import NotFoundPage from './pages/NotFoundPage'

function App() {
    const routes: RouteObject[] = [
        {
            path: '/',
            element: <PublicLayout />,
            children: [
                {
                    path: '',
                    element: <RegisterPage />,
                },
                {
                    path: 'login',
                    element: <LoginPage />,
                },
                {
                    path: '*',
                    element: <NotFoundPage />,
                },
            ],
        },
        {
            path: '/main/',

            element: <PrivateLayout />,
            children: [
                {
                    path: '',
                    element: <ProfilePage />,
                },
                {
                    path: 'update',
                    element: <UpdateProfilePage />,
                },
                {
                    path: 'form',
                    element: <AllCoursePage />,
                },
                {
                    path: 'form/create',
                    element: <AddCoursePage />,
                },
                {
                    path: 'review',
                    element: <ReviewPage />,
                },
                {
                    path: '*',
                    element: <NotFoundPage />,
                },
            ],
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
    ]

    return <RouterProvider router={createBrowserRouter(routes)} />
}

export default App
