import { getAllCourses, CoursesInterface, CourseItemInterface } from '@/api/courseService'
import DeleteConfirmModal from '@/components/DeleteConfirmModal'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const mockCourses: CoursesInterface = {
    course: [
        {
            course_id: 'CSCI101',
            course_name: 'Introduction to Computer Science',
            course_description: 'An introductory course to the fundamentals of computer science',
            faculty_department: 'Computer Science',
            academic_term: 'Fall',
            academic_year: 2023,
            professors: [
                {
                    professor_name: 'Prof. John Doe',
                },
            ],
            prerequisites: [
                {
                    course_id: 'None',
                },
            ],
            status: 'Open',
            curriculum_name: 'BSc Computer Science',
            degree_level: 'Undergraduate',
            teaching_hours: 3,
        },
        {
            course_id: 'MATH201',
            course_name: 'Advanced Mathematics',
            course_description: 'A detailed look into advanced mathematical theories',
            faculty_department: 'Mathematics',
            academic_term: 'Spring',
            academic_year: 2023,
            professors: [
                {
                    professor_name: 'Prof. Jane Smith',
                },
            ],
            prerequisites: [
                {
                    course_id: 'MATH101',
                },
            ],
            status: 'Open',
            curriculum_name: 'BSc Mathematics',
            degree_level: 'Undergraduate',
            teaching_hours: 4,
        },
        // Add more courses as needed
    ],
}

const AllCoursePage = () => {
    const [selectedCourse, setSelectedCourse] = useState<CourseItemInterface | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [courses, setCourses] = useState<CoursesInterface>(mockCourses)
    const navigate = useNavigate()

    useEffect(() => {
        // Here you can fetch the courses from the backend
        // and set the state accordingly
        // onStart()
    }, [])

    const onStart = async () => {
        console.log('onStart')
        await getAllCourses(import.meta.env.VITE_COURSE_SERVER).then(() => {
            // setCourses(courses)
        })
    }

    const handleDelete = (course: CourseItemInterface) => {
        setSelectedCourse(course)
        setIsModalOpen(true)
    }

    const handleConfirmDelete = (courseId: string) => {
        console.log('Confirmed deletion of course with ID:', courseId)
        setIsModalOpen(false)
        // Here you can add logic to delete the course from the state or backend
        // For example, filtering out the deleted course:
        // setCourses(courses.filter((course) => course.courseId !== courseId))
    }

    const handleEdit = (course: CourseItemInterface) => {
        navigate('/main/form/create', { state: { course } })
        window.location.reload()
    }

    return (
        <section className='bg-gray-50 dark:bg-gray-900'>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <div className='w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                    <div className='p-6 space-y-4 md:space-y-6'>
                        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                            All Courses
                        </h1>
                        <div className='space-y-4 md:space-y-6'>
                            {courses.course.map((course) => (
                                <div key={course.course_id} className='bg-white p-4 rounded-lg shadow-md'>
                                    <h2 className='text-lg font-bold'>{course.course_name}</h2>
                                    <p>{course.course_description}</p>
                                    {/* Edit button */}
                                    <button
                                        onClick={() => handleEdit(course)}
                                        className='w-full bg-black hover:bg-gray-700 text-white font-medium rounded-lg px-4 py-2 mt-6'
                                    >
                                        Edit
                                    </button>
                                    {/* Delete button */}
                                    <button
                                        onClick={() => handleDelete(course)}
                                        className='w-full bg-black hover:bg-gray-700 text-white font-medium rounded-lg px-4 py-2 mt-6'
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <DeleteConfirmModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmDelete}
                course={selectedCourse!}
            />
        </section>
    )
}
export default AllCoursePage
