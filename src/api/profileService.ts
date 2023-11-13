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
    await fetch(`${path}/profile`, {
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

export async function readProfile(path: string, body: CreateRequest, id: string) {
    await fetch(`${path}/profile/${id}`, {
        method: 'GET',
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
                    console.log('From readProfile: ', data)
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
