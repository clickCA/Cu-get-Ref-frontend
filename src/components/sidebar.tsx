import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    icon?: React.ReactNode
    active?: boolean
    onClick?: () => void
}

const SVG_IMAGES = {
    Profile: (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-4 w-4'
        >
            <circle cx='12' cy='12' r='10' />
            <polygon points='10 8 16 12 10 16 10 8' />
        </svg>
    ),
    Browse: (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-4 w-4'
        >
            <rect width='7' height='7' x='3' y='3' rx='1' />
            <rect width='7' height='7' x='14' y='3' rx='1' />
            <rect width='7' height='7' x='14' y='14' rx='1' />
            <rect width='7' height='7' x='3' y='14' rx='1' />
        </svg>
    ),
    Radio: (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-4 w-4'
        >
            <path d='M4.9 19.1C1 15.2 1 8.8 4.9 4.9' />
            <path d='M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5' />
            <circle cx='12' cy='12' r='2' />
            <path d='M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5' />
            <path d='M19.1 4.9C23 8.8 23 15.1 19.1 19' />
        </svg>
    ),
    Playlists: (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-4 w-4'
        >
            <path d='M21 15V6' />
            <path d='M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
            <path d='M12 12H3' />
            <path d='M16 6H3' />
            <path d='M12 18H3' />
        </svg>
    ),
    Songs: (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-4 w-4'
        >
            <circle cx='8' cy='18' r='4' />
            <path d='M12 18V2l7 4' />
        </svg>
    ),
    MadeForYou: (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-4 w-4'
        >
            <path d='m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12' />
            <circle cx='17' cy='7' r='5' />
        </svg>
    ),
    Artists: (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-4 w-4'
        >
            <path d='m16 6 4 14' />
            <path d='M12 6v14' />
            <path d='M8 8v12' />
            <path d='M4 4v16' />
        </svg>
    ),
    Albums: (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2 h-4 w-4'
        >
            <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
            <circle cx='12' cy='7' r='4' />
        </svg>
    ),
}

export default function Sidebar({ className }: SidebarProps) {
    const [active, setActive] = useState([true, false, false, false, false])
    const navigate = useNavigate()

    useEffect(() => {
        const path = window.location.pathname
        if (path === '/main/') {
            setActive([true, false, false, false, false])
        } else if (path === '/main/update') {
            setActive([false, true, false, false, false])
        } else if (path === '/main/form') {
            setActive([false, false, true, false, false])
        } else if (path === '/main/form/create') {
            setActive([false, false, false, true, false])
        } else if (path === '/main/review') {
            setActive([false, false, false, false, true])
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const CustomButton = ({ children, active, onClick }: CustomButtonProps) => {
        let variant: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | null | undefined = 'ghost'
        if (active) {
            variant = 'secondary'
        }

        return (
            <Button variant={variant} className='w-full justify-start' onClick={onClick}>
                {children}
            </Button>
        )
    }

    return (
        <div className={cn('pb-12', className)}>
            <div className='space-y-4 py-4'>
                <div className='px-3 py-2'>
                    <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>Profile</h2>
                    <div className='space-y-1'>
                        <CustomButton
                            active={active[0]}
                            onClick={() => {
                                setActive([true, false, false, false, false])
                                navigate('/main/')
                            }}
                        >
                            {SVG_IMAGES.Profile}
                            My Profile
                        </CustomButton>
                        <CustomButton
                            active={active[1]}
                            onClick={() => {
                                setActive([false, true, false, false, false])
                                navigate('/main/update')
                            }}
                        >
                            {SVG_IMAGES.Profile}
                            Update Profile
                        </CustomButton>
                    </div>
                </div>
                <div className='px-3 py-2'>
                    <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>Courses</h2>
                    <div className='space-y-1'>
                        <CustomButton
                            active={active[2]}
                            onClick={() => {
                                setActive([false, false, true, false, false])
                                navigate('/main/form')
                            }}
                        >
                            {SVG_IMAGES.Playlists}
                            All Courses
                        </CustomButton>
                        <CustomButton
                            active={active[3]}
                            onClick={() => {
                                setActive([false, false, false, true, false])
                                navigate('/main/form/create')
                            }}
                        >
                            {SVG_IMAGES.Playlists}
                            Create Course
                        </CustomButton>
                        <CustomButton
                            active={active[4]}
                            onClick={() => {
                                setActive([false, false, false, false, true])
                                navigate('/main/review')
                            }}
                        >
                            {SVG_IMAGES.Playlists}
                            Review
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
