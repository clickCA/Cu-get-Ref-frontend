import * as React from 'react'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { register, Role, AuthRequest, roleMapper, enumMapper } from '@/api/authService'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string | null>(null)
    const navigate = useNavigate()
    const HOME_PAGE = '/updateProfileStudent'
    const LOGIN_PAGE = '/login'

    useEffect(() => {
        if (Cookies.get('token')) {
            window.location.href = HOME_PAGE
        }
    }, [])

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setError(null)
        const target = event.target as typeof event.target & {
            email: { value: string }
            password: { value: string }
            role: { value: string }
        }
        const body: AuthRequest = {
            email: target.email.value,
            password: target.password.value,
            role: enumMapper(target.role.value),
        }
        setIsLoading(true)
        await register(import.meta.env.VITE_AUTH_SERVER, body)
            .then(() => {
                navigate(LOGIN_PAGE)
            })
            .catch((error) => {
                setError(error.message)
                return null
            })
        setIsLoading(false)
    }

    return (
        <div className={cn('grid gap-6', className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className='grid gap-2'>
                    <div className='grid gap-1'>
                        <Label className='sr-only' htmlFor='email'>
                            Email
                        </Label>
                        <Input
                            id='email'
                            placeholder='name@example.com'
                            type='email'
                            autoCapitalize='none'
                            autoComplete='email'
                            autoCorrect='off'
                            disabled={isLoading}
                        />
                    </div>
                    <div className='grid gap-1'>
                        <Label className='sr-only' htmlFor='password'>
                            Password
                        </Label>
                        <Input
                            id='password'
                            placeholder='password'
                            type='password'
                            autoCapitalize='none'
                            autoComplete='password'
                            autoCorrect='off'
                            disabled={isLoading}
                        />
                    </div>
                    <div className='grid gap-1'>
                        <Label className='sr-only' htmlFor='role'>
                            Role
                        </Label>

                        <Select name='role'>
                            <SelectTrigger className=''>
                                <SelectValue placeholder='please select role' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Roles</SelectLabel>
                                    {/* <SelectItem value={roleMapper(Role.Admin)}>Admin</SelectItem> */}
                                    <SelectItem value={roleMapper(Role.Student)}>Student</SelectItem>
                                    <SelectItem value={roleMapper(Role.Professor)}>Teacher</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    {error && (
                        <div className='text-red-500 text-sm font-medium'>
                            <p>{error}</p>
                        </div>
                    )}
                    <Button disabled={isLoading}>
                        {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
                        Sign Up with Email
                    </Button>
                </div>
            </form>
        </div>
    )
}
