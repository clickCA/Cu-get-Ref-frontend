import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { createProfile, CreateRequest, readProfile, ReadRequest, roleMapper, ReadResponse } from '@/api/profileService'
import Cookies from 'js-cookie'

export default function ProfilePage() {
    const [isLoad, setIsLoad] = useState(true)
    const [user, setUser] = useState<ReadResponse>({} as ReadResponse)

    useEffect(() => {
        onStart()
    }, [])

    const onStart = async () => {
        const user = Cookies.get('user')
        const isCreated = Cookies.get(user!)
        if (!isCreated) {
            const role = Cookies.get('role')
            const createRequest: CreateRequest = {
                email: user!,
                password: '123',
                userType: roleMapper(role!),
            }
            console.log('createRequest', createRequest)
            await createProfile(import.meta.env.VITE_PROFILE_SERVER, createRequest).then(() => {
                window.location.reload()
            })
        } else {
            const role = Cookies.get('role')
            const readRequest: ReadRequest = {
                id: isCreated,
                userType: roleMapper(role!),
            }
            console.log('readRequest', readRequest)
            await readProfile(import.meta.env.VITE_PROFILE_SERVER, readRequest).then((user: ReadResponse) => {
                setUser(user)
                setIsLoad(false)
            })
        }
    }

    const MainComponent = () => {
        return (
            <section className='bg-gray-50 dark:bg-gray-900'>
                <div className='flex flex-col items-center justify-center px-6 py-8 mx-10 md:h-screen lg:py-0'>
                    <a href='#' className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            className='mr-2 h-6 w-6'
                        >
                            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
                        </svg>
                        Cu get ref
                    </a>
                    <Card className='p-10'>
                        <CardHeader>
                            <CardTitle className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                                My Profile
                            </CardTitle>
                            <CardDescription>contain all information</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                <b>ID</b> {user.user.ID}
                            </p>
                        </CardContent>
                        <CardContent>
                            <p>
                                <b>CreatedAt</b> {user.user.CreatedAt}
                            </p>
                        </CardContent>
                        <CardContent>
                            <p>
                                <b>UpdatedAt</b> {user.user.UpdatedAt}
                            </p>
                        </CardContent>
                        <CardContent>
                            <p>
                                <b>DeletedAt</b> {user.user.DeletedAt}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        )
    }

    return (
        <>{isLoad ? <div className='flex justify-center items-center h-screen'>Loading...</div> : <MainComponent />}</>
    )
}
