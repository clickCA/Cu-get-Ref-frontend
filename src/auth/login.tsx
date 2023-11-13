import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { login, Role, AuthRequest, LoginResponse, roleMapper, enumMapper } from '@/api/authService'
import { useState } from 'react'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'

const Login = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        const body: AuthRequest = {
            email: event.target[0].value,
            password: event.target[1].value,
            role: enumMapper(event.target[3].value),
        }
        setIsLoading(true)
        const response: LoginResponse | null = await login(import.meta.env.VITE_AUTH_SERVER, body)
            .catch((error) => {
                setError(error.message)
                return null
            })
            .then((response) => {
                return response
            })
        console.table(response)
        setIsLoading(false)
    }
    const LoginForm = () => {
        return (
            <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                    <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                        Sign in to your account
                    </h1>
                    <form className='space-y-4 md:space-y-6' onSubmit={onSubmit}>
                        <div>
                            <label
                                htmlFor='email'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                            >
                                Your email
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                placeholder='name@example.com'
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor='password'
                                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                            >
                                Password
                            </label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='••••••••'
                                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                required
                            />
                        </div>
                        <Select>
                            <SelectTrigger className=''>
                                <SelectValue placeholder='please select role' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Roles</SelectLabel>
                                    <SelectItem value={roleMapper(Role.Admin)}>Admin</SelectItem>
                                    <SelectItem value={roleMapper(Role.Student)}>Student</SelectItem>
                                    <SelectItem value={roleMapper(Role.Professor)}>Teacher</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {error && (
                            <div className='text-red-500 text-sm font-medium'>
                                <p>{error}</p>
                            </div>
                        )}
                        <Button
                            disabled={isLoading}
                            className='w-full bg-black hover:bg-black text-white font-medium rounded-lg px-4 py-2 mt-6'
                        >
                            {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
                            Sign In
                        </Button>
                        <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                            Don’t have an account yet?{' '}
                            <a href='/' className='font-medium text-black-600 hover:underline dark:text-black-500'>
                                Sign up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <section className='bg-gray-50 dark:bg-gray-900'>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
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
                <LoginForm />
            </div>
        </section>
    )
}

export default Login
