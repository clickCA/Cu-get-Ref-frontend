import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import UpdateProfileStudent from './components/profileStudent'
import Review from './components/review'
import AddCourse from './courseManagement/addCourse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
    const routes = [
        {
            path: '/',
            element: <RegisterPage />,
        },
        {
            path: '/login',
            element: <LoginPage />,
        },
        {
            path: '/updateProfileStudent',
            element: <UpdateProfileStudent />,
        },
        {
            path: '/review',
            element: <Review />,
        },

        {
            path: '/form',
            element: <AddCourse />,
        },
    ]

    return <RouterProvider router={createBrowserRouter(routes)} />
}

export default App
