import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export default function PrivateLayout() {
    const HOME_PAGE = '/'
    useEffect(() => {
        console.log('PrivateLayout')
        if (!Cookies.get('token')) {
            window.location.href = HOME_PAGE
        }
    }, [])

    return <Outlet />
}
