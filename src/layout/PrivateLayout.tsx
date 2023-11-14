import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/sidebar'
import { Button } from '@/components/ui/button'

export default function PrivateLayout() {
    const [user, setUser] = useState<string>('')
    const [role, setRole] = useState<string>('')
    const HOME_PAGE = '/'
    useEffect(() => {
        console.log('PrivateLayout')
        if (!Cookies.get('token')) {
            window.location.href = HOME_PAGE
        }
        const user = Cookies.get('user')
        const role = Cookies.get('role')
        if (user) {
            setUser(user)
        }
        if (role) {
            setRole(role)
        }
    }, [])

    const onLogout = () => {
        Cookies.remove('token')
        Cookies.remove('user')
        Cookies.remove('role')
        window.location.href = HOME_PAGE
    }

    const BottomNav = () => {
        return (
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <p className='text-sm text-gray-700 dark:text-gray-400'>
                    Welcome back, {user} <b>{role}</b>
                </p>
                <Button className='w-full justify-start' onClick={onLogout}>
                    Logout
                </Button>
            </div>
        )
    }

    return (
        <div className='flex'>
            <div className='w-56 justify-self-start grow-0'>
                <Sidebar />
                <BottomNav />
            </div>
            <div className='grow '>
                <Outlet />
            </div>
        </div>
    )
}
