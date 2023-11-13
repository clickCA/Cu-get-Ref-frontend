import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProfileStudentPage from './pages/ProfileStudentPage'
import Review from './components/review'
import AddCourse from './courseManagement/addCourse'
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
                    element: <ProfileStudentPage />,
                },
                {
                    path: 'review',
                    element: <Review />,
                },

                {
                    path: 'form',
                    element: <AddCourse />,
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
