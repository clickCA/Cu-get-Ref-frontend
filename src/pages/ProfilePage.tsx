import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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
            <Card className=''>
                <CardHeader>
                    <CardTitle>My Profile</CardTitle>
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
                <CardFooter>
                    <p>That all</p>
                </CardFooter>
            </Card>
        )
    }

    return (
        <>{isLoad ? <div className='flex justify-center items-center h-screen'>Loading...</div> : <MainComponent />}</>
    )
}
