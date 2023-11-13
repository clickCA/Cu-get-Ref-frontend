import Cookies from 'js-cookie'

export enum Role {
    Admin = 0,
    Student = 1,
    Professor = 2,
}

export interface RegisterResponse {
    ID: number
    CreatedAt: string
    UpdatedAt: string
    DeletedAt: null
    Email: string
    PasswordHash: string
    Role: Role
}

export interface LoginResponse {
    token: string
}
export interface AuthRequest {
    email: string
    password: string
    role: Role
}

export async function login(path: string, body: AuthRequest) {
    await fetch(`${path}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: body.email, // Replace with actual email input value
            password: body.password, // Replace with actual password input value
            role: body.role, // Use the selected role
        }),
    })
        .then((res) => {
            if (res.ok) {
                return res.json().then((data: LoginResponse) => {
                    // 1/48 = 30 minutes
                    const expire = 1 / 48
                    Cookies.set('token', data.token, { expires: expire })
                })
            } else {
                throw new Error('Login failed')
            }
        })
        .catch((err) => {
            if (err.message === 'Login failed') throw new Error('Login failed')
            throw new Error("Couldn't connect to the server")
        })
}

export async function register(path: string, body: AuthRequest) {
    await fetch(`${path}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: body.email, // Replace with actual email input value
            password: body.password, // Replace with actual password input value
            role: body.role, // Use the selected role
        }),
    })
        .then((res) => {
            if (res.ok) {
                return res.json().then((data: RegisterResponse) => {
                    console.table(data)
                })
            } else {
                throw new Error('Register failed')
            }
        })
        .catch((err) => {
            if (err.message === 'Register failed') throw new Error('Register failed')
            throw new Error("Couldn't connect to the server")
        })
}

export function roleMapper(role: Role): string {
    switch (role) {
        case Role.Admin:
            return 'Admin'
        case Role.Professor:
            return 'Professor'
        case Role.Student:
            return 'Student'
    }
}
export function enumMapper(role: string): Role {
    switch (role) {
        case 'Admin':
            return Role.Admin
        case 'Professor':
            return Role.Professor
        case 'Student':
            return Role.Student
        default:
            return Role.Student
    }
}
