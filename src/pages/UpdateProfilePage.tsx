import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { createProfile, CreateRequest, readProfile, ReadRequest, ReadResponse, roleMapper } from '@/api/profileService'
import Cookies from 'js-cookie'

const UpdateProfileStudent = () => {
    const [user, setUser] = useState<ReadResponse>({} as ReadResponse)
    const [isLoad, setIsLoad] = useState(true)
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [year, setYear] = useState<string>('')
    const [major, setMajor] = useState<string>('')

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

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYear(event.target.value)
    }
    const handleMajorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMajor(event.target.value)
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        // Add logic here to update the user's profile with the new information
        console.log('Profile Updated:', { name, email, year, major })
    }

    const MainComponent = () => {
        return (
            <>
                <section className='bg-gray-50 dark:bg-gray-900'>
                    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                        <a
                            href='#'
                            className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
                        >
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
                        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                                    Profile Update {user.user.ID}
                                </h1>
                                <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6' action='#'>
                                    <div className='grid w-full items-center gap-4'>
                                        <div className='flex flex-col space-y-1.5'>
                                            <Label htmlFor='name'>Name: </Label>
                                            <Input
                                                type='text'
                                                id='name'
                                                placeholder='Tomyam Gung'
                                                value={name}
                                                onChange={handleNameChange}
                                                disabled
                                            />
                                        </div>
                                        <div className='flex flex-col space-y-1.5'>
                                            <Label htmlFor='email'>Email: </Label>
                                            <Input
                                                type='email'
                                                id='email'
                                                placeholder='Email'
                                                value={email}
                                                onChange={handleEmailChange}
                                                disabled
                                            />
                                        </div>
                                        <div className='flex flex-col space-y-1.5'>
                                            <Label htmlFor='year'>Year: </Label>
                                            <Input
                                                type='text'
                                                id='year'
                                                placeholder='Year'
                                                value={year}
                                                onChange={handleYearChange}
                                                disabled
                                            />
                                        </div>
                                        <div className='flex flex-col space-y-1.5'>
                                            <Label htmlFor='major'>Major: </Label>
                                            <Input
                                                type='text'
                                                id='major'
                                                placeholder='Major'
                                                value={major}
                                                onChange={handleMajorChange}
                                                disabled
                                            />
                                        </div>
                                        <Button type='submit' disabled>
                                            Update Profile
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    return (
        <>{isLoad ? <div className='flex justify-center items-center h-screen'>Loading...</div> : <MainComponent />}</>
    )
}

export default UpdateProfileStudent
