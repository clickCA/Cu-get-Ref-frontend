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
    await fetch(`${path}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: body.email, // Replace with actual email input value
            password: body.password, // Replace with actual password input value
            userType: body.userType, // Use the selected role
        }),
    })
        .then((res) => {
            if (res.ok) {
                return res.json().then((data: CreateResponse) => {
                    console.log('From createProfile: ', data)
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
