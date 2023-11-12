export enum Role {
    Admin = 0,
    Student = 1,
    Professor = 2,
}
export interface AuthResponse {
    token: string
    user: {
        createdAt: string
        deletedAt: {
            time: string
            valid: boolean
        }
        email: string
        id: number
        passwordHash: string
        role: Role
        updatedAt: string
    }
}

export interface AuthRequest {
    email: string
    password: string
    role: Role
}

export async function login(path: string, body: AuthRequest, token: string): Promise<AuthResponse> {
    try {
        const response = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                email: body.email, // Replace with actual email input value
                password: body.password, // Replace with actual password input value
                role: body.role, // Use the selected role
            }),
        })

        if (response.ok) {
            const message: AuthResponse = response.body
            // Login was successful, handle accordingly (e.g., redirect to another page)
            return message
        } else {
            // Login failed, handle accordingly (e.g., show an error message)
            throw new Error('Login failed')
        }
    } catch (error) {
        // Handle network or request errors
        throw new Error("Couldn't connect to the server")
    }
}

export async function register(path: string, body: AuthRequest): Promise<AuthResponse> {
    try {
        const response = await fetch(path, {
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

        if (response.ok) {
            const message: AuthResponse = response.body
            // Login was successful, handle accordingly (e.g., redirect to another page)
            return message
        } else {
            // Login failed, handle accordingly (e.g., show an error message)
            throw new Error('Register failed')
        }
    } catch (error) {
        // Handle network or request errors
        throw new Error("Couldn't connect to the server")
    }
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
