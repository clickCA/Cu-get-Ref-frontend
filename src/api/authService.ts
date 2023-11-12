export async function login(path: string, method: string, body: any, token: string): Promise<any> {
    try {
        const res = await fetch(path, {
            method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        })
        return await res.json()
    } catch (err) {
        return console.log(err)
    }
}

export async function register(path: string, body: any): Promise<any> {
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
            // Login was successful, handle accordingly (e.g., redirect to another page)
            return 'Login successful'
        } else {
            // Login failed, handle accordingly (e.g., show an error message)
            return 'Login failed'
        }
    } catch (error) {
        // Handle network or request errors
        return 'error'
    }
}
