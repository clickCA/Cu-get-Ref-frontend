import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useLocation } from 'react-router-dom'
import { CourseItemInterface } from '@/api/courseService'
import { useEffect } from 'react'

interface AddCourseProps {
    course?: CourseItemInterface
}

const AddCourse: React.FC<AddCourseProps> = ({ course }) => {
    const location = useLocation()
    const courseData = location.state as { course: CourseItemInterface }
    useEffect(() => {
        console.log(courseData)
    })
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
                            Add course
                        </h1>
                        <form className='space-y-4 md:space-y-6' action='#'>
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Course Id
                                </label>
                                <input
                                    type='text'
                                    name='courseId'
                                    id='courseId'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    placeholder='2110xxx'
                                    defaultValue={course?.course_id}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='courseName'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    CourseName
                                </label>
                                <input
                                    type='text'
                                    name='courseName'
                                    id='courseName'
                                    placeholder='Software Architecture'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='courseDescription'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Course Description
                                </label>
                                <input
                                    type='text'
                                    name='courseDescription'
                                    id='courseDescription'
                                    placeholder=' '
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='facultyDepartment'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Faculty Department
                                </label>
                                <input
                                    type='text'
                                    name='facultyDepartment'
                                    id='facultyDepartment'
                                    placeholder='Computer Engineer'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    required
                                />
                            </div>
                            <Select>
                                <SelectTrigger className='academicTerm'>
                                    <SelectValue placeholder='Academic Term' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {/* <SelectLabel>Roles</SelectLabel> */}
                                        <SelectItem value='First Semester'>First Semester</SelectItem>
                                        <SelectItem value='Seconnd Semester'>Second Semester</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div>
                                <label
                                    htmlFor='academicYear'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Academic Year
                                </label>
                                <input
                                    type='number'
                                    name='academicYear'
                                    id='academicYear'
                                    placeholder='2021'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='professors'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Professors
                                </label>
                                <input
                                    type='text'
                                    name='professors'
                                    id='professors'
                                    placeholder='Aj.XXXX'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='prerequisites'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Prerequisites
                                </label>
                                <input
                                    type='text'
                                    name='prerequisites'
                                    id='prerequisites'
                                    placeholder='xxxx'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='status'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Status
                                </label>
                                <input
                                    type='text'
                                    name='status'
                                    id='status'
                                    placeholder='Open'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='curriculumName'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Curriculum Name
                                </label>
                                <input
                                    type='text'
                                    name='curriculumName'
                                    id='curriculumName'
                                    placeholder='XXXXX'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    required
                                />
                            </div>
                            <Select>
                                <SelectTrigger className='degreeLevel'>
                                    <SelectValue placeholder='Degree Level' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {/* <SelectLabel>Roles</SelectLabel> */}
                                        <SelectItem value='Undergraduate'>Undergraduate</SelectItem>
                                        <SelectItem value='Graduated'>Graduated</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div>
                                <label
                                    htmlFor='teachingHours'
                                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                                >
                                    Teaching Hours
                                </label>
                                <input
                                    type='time'
                                    name='teachingHours'
                                    id='teachingHours'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    required
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-black hover:bg-black text-white font-medium rounded-lg px-4 py-2 mt-6'
                            >
                                Add course
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddCourse
