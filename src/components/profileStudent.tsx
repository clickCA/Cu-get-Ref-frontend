import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ProfileStudentInterface } from '../interface/ProfileStudent'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

const UpdateProfileStudent: React.FC<ProfileStudentInterface> = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [year, setYear] = useState<string>('')
    const [major, setMajor] = useState<string>('')

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleYearChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setYear(event.target.value)
    }
    const handleMajorChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMajor(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        // Add logic here to update the user's profile with the new information
        console.log('Profile Updated:', { name, email, year, major })
        // try {
        //     const response = await fetch(" ", {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify({
        //         name: "string",
        //         email: "string", // Replace with actual email input value
        //         year: "string", // Replace with actual password input value
        //         major: "string", // Use the selected role
        //       }),
        //     });

        //     if (response.ok) {
        //       // Login was successful, handle accordingly (e.g., redirect to another page)
        //       console.log("Update profile successful");
        //     } else {
        //       // Login failed, handle accordingly (e.g., show an error message)
        //       console.error("Update profile failed");
        //     }
        //   } catch (error) {
        //     // Handle network or request errors
        //     console.error("Network error:", error);
        //   }
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
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                            Profile Update
                        </h1>
                        <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6' action='#'>
                            <div className='grid w-full items-center gap-4'>
                                <div className='flex flex-col space-y-1.5'>
                                    <Label htmlFor='name'>Name: </Label>
                                    <Input type='text' value={name} onChange={handleNameChange} />
                                </div>
                                <div className='flex flex-col space-y-1.5'>
                                    <Label htmlFor='email'>Email: </Label>
                                    <Input type='email' value={email} onChange={handleEmailChange} />
                                </div>
                                <div className='flex flex-col space-y-1.5'>
                                    <Label htmlFor='year'>Year: </Label>
                                    <Input type='text' value={year} onChange={handleYearChange} />
                                </div>
                                <div className='flex flex-col space-y-1.5'>
                                    <Label htmlFor='major'>Major: </Label>
                                    <Input type='text' value={major} onChange={handleMajorChange} />
                                </div>
                                <Button type='submit'>Update Profile</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpdateProfileStudent
