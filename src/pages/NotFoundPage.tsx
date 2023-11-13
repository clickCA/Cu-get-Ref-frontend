import { useEffect } from 'react'

export default function NotFoundPage() {
    console.log('NotFoundPage')
    const LOGIN_PAGE = '/login'
    useEffect(() => {
        window.location.href = LOGIN_PAGE
    }, [])
    return <div>NotFoundPage</div>
}
