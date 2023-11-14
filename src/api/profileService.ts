import Cookies from 'js-cookie'

export interface CreateRequest {
    email: string
    password: string
    userType: UserType
}

export interface CreateResponse {
    user: {
        ID: number
        CreatedAt: string
        UpdatedAt: string
        DeletedAt: null
    }
}

export enum UserType {
    STUDENT = 'student',
    TEACHER = 'professor',
}

export async function createProfile(path: string, body: CreateRequest) {
    await fetch(`${path}/profiles`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: body.email,
            password: body.password,
            userType: body.userType,
        }),
    })
        .then((res) => {
            if (res.ok) {
                return res.json().then((data: CreateResponse) => {
                    console.log('From createProfile: ', data)
                    Cookies.set(body.email, data.user.ID.toString())
                })
            } else {
                throw new Error('Create Profile failed')
            }
        })
        .catch((err) => {
            if (err.message === 'Create Profile failed') throw new Error('Create Profile failed')
            throw new Error("Couldn't connect to the server")
        })
}

// readProfile
export interface ReadRequest {
    id: string
    userType: UserType
}

export interface ReadResponse {
    user: {
        ID: number
        CreatedAt: string
        UpdatedAt: string
        DeletedAt: null
    }
}

export async function readProfile(path: string, body: ReadRequest) {
    return await fetch(`${path}/profiles/${body.id}?userType=${body.userType}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json().then((data: ReadResponse) => {
                    return data
                })
            } else {
                throw new Error('Read Profile failed')
            }
        })
        .catch((err) => {
            if (err.message === 'Read Profile failed') throw new Error('Read Profile failed')
            throw new Error("Couldn't connect to the server")
        })
}

// updateProfile

// deleteProfile

export function roleMapper(role: string) {
    switch (role) {
        case 'Admin':
            return UserType.TEACHER
        case 'Professor':
            return UserType.TEACHER
        case 'Student':
            return UserType.STUDENT
        default:
            return UserType.STUDENT
    }
}
