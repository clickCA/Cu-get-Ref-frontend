import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useLocation, useNavigate } from 'react-router-dom'
import { CourseItemInterface, addNewCourse, updateCourseDetail } from '@/api/courseService'
import { Icons } from '@/components/icons'
import { useState } from 'react'

interface AddCourseProps {
    course?: CourseItemInterface
}

const AddCourse: React.FC<AddCourseProps> = () => {
    const location = useLocation()
    const courseData = location.state as { course: CourseItemInterface }
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const ALL_COURSES = '/main/form'
    const navigate = useNavigate()

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const target = event.target as typeof event.target & {
            courseId: { value: string }
            courseName: { value: string }
            courseDescription: { value: string }
            facultyDepartment: { value: string }
            academicTerm: { value: string }
            academicYear: { value: string }
            professors: { value: string }
            prerequisites: { value: string }
            status: { value: string }
            curriculumName: { value: string }
            degreeLevel: { value: string }
            teachingHours: { value: string }
        }
        const body: CourseItemInterface = {
            course_id: target.courseId.value,
            course_name: target.courseName.value,
            course_description: target.courseDescription.value,
            faculty_department: target.facultyDepartment.value,
            academic_term: target.academicTerm.value,
            academic_year: parseInt(target.academicYear.value),
            professors: [
                {
                    professor_name: target.professors.value,
                },
            ],
            prerequisites: [
                {
                    course_id: target.prerequisites.value,
                },
            ],
            status: target.status.value,
            curriculum_name: target.curriculumName.value,
            degree_level: target.degreeLevel.value,
            teaching_hours: parseInt(target.teachingHours.value),
        }
        setIsLoading(true)
        setError(null)
        if (courseData?.course.course_id) {
            // Update
            await updateCourseDetail(import.meta.env.VITE_COURSE_SERVER, body)
                .then((data) => {
                    console.log('update data', data)
                    navigate(ALL_COURSES)
                    setIsLoading(false)
                    navigate(0)
                })
                .catch((error) => {
                    setError(error.message)
                })
        } else {
            // Create
            await addNewCourse(import.meta.env.VITE_COURSE_SERVER, body)
                .then((data) => {
                    console.log('add data', data)
                    navigate(ALL_COURSES)
                    setIsLoading(false)
                    navigate(0)
                })
                .catch((error) => {
                    setError(error.message)
                })
        }
        setIsLoading(false)
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
                            Add course
                        </h1>
                        <form className='space-y-4 md:space-y-6' action='#' onSubmit={onSubmit}>
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
                                    defaultValue={courseData?.course.course_id}
                                    disabled={courseData?.course.course_id ? true : false}
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
                                    defaultValue={courseData?.course.course_name}
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
                                    defaultValue={courseData?.course.course_description}
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
                                    defaultValue={courseData?.course.faculty_department}
                                    required
                                />
                            </div>
                            <Select name='academicTerm' required>
                                <SelectTrigger className='academicTerm'>
                                    <SelectValue
                                        defaultValue={courseData?.course.academic_term}
                                        placeholder='Academic Term'
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value='1'>First Semester</SelectItem>
                                        <SelectItem value='2'>Second Semester</SelectItem>
                                        <SelectItem value='3'>Summer</SelectItem>
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
                                    defaultValue={courseData?.course.academic_year}
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
                                    defaultValue={courseData?.course.professors[0].professor_name}
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
                                    defaultValue={courseData?.course.prerequisites[0].course_id}
                                    placeholder='xxxx'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    required
                                />
                            </div>
                            <Select name='status' required>
                                <SelectTrigger className='status'>
                                    <SelectValue defaultValue={courseData?.course.status} placeholder='Open' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value='open'>Open</SelectItem>
                                        <SelectItem value='close'>Close</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
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
                                    defaultValue={courseData?.course.curriculum_name}
                                    required
                                />
                            </div>
                            <Select name='degreeLevel' required>
                                <SelectTrigger className='degreeLevel'>
                                    <SelectValue
                                        defaultValue={courseData?.course.degree_level}
                                        placeholder='Degree Level'
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value='bachelor'>Bachelor</SelectItem>
                                        <SelectItem value='master'>Master</SelectItem>
                                        <SelectItem value='doctoral'>Doctoral</SelectItem>
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
                                    type='number'
                                    name='teachingHours'
                                    id='teachingHours'
                                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-black-600 focus:border-black-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    defaultValue={courseData?.course.teaching_hours.toString()}
                                    required
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-black hover:bg-black text-white font-medium rounded-lg px-4 py-2 mt-6'
                                disabled={isLoading}
                            >
                                {isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
                                Add course
                            </button>
                            {error && (
                                <div className='text-red-500 text-sm font-medium'>
                                    <p>{error}</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddCourse
