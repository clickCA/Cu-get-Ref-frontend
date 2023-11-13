import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export default function PublicLayout() {
    useEffect(() => {
        console.log('PublicLayout')
    }, [])
    return <Outlet />
}
