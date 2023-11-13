import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/sidebar'

export default function PrivateLayout() {
    const HOME_PAGE = '/'
    useEffect(() => {
        console.log('PrivateLayout')
        if (!Cookies.get('token')) {
            window.location.href = HOME_PAGE
        }
    }, [])

    return (
        <div className='flex'>
            <div className='w-56 justify-self-start grow-0'>
                <Sidebar />
            </div>
            <div className='grow '>
                <Outlet />
            </div>
        </div>
    )
}
