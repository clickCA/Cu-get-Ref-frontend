import { getAllCourses, CoursesInterface, CourseItemInterface, CourseId, deleteCourse } from '@/api/courseService'
import DeleteConfirmModal from '@/components/DeleteConfirmModal'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AllCoursePage = () => {
    const [selectedCourse, setSelectedCourse] = useState<CourseItemInterface | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [courses, setCourses] = useState<CoursesInterface>({} as CoursesInterface)
    const [isLoad, setIsLoad] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        // Here you can fetch the courses from the backend
        // and set the state accordingly
        onStart()
    }, [])

    const onStart = () => {
        getAllCourses(import.meta.env.VITE_COURSE_SERVER)
            .then((data: CoursesInterface) => {
                setCourses(data)
                setIsLoad(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleDelete = (course: CourseItemInterface) => {
        setSelectedCourse(course)
        setIsModalOpen(true)
    }

    const handleConfirmDelete = async (courseId: string) => {
        console.log('Confirmed deletion of course with ID:', courseId)
        setIsModalOpen(false)
        // Here you can add logic to delete the course from the state or backend
        // For example, filtering out the deleted course:
        const req: CourseId = {
            course_id: courseId,
        }
        setIsLoad(true)
        await deleteCourse(import.meta.env.VITE_COURSE_SERVER, req)
            .then(() => {
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
        setIsLoad(false)
    }

    const handleEdit = (course: CourseItemInterface) => {
        navigate('/main/form/create', { state: { course } })
        window.location.reload()
    }

    const MainComponent = () => {
        return (
            <section className='bg-gray-50 dark:bg-gray-900'>
                <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                    <div className='w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                        <div className='p-6 space-y-4 md:space-y-6'>
                            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                                All Courses
                            </h1>
                            <div className='space-y-4 md:space-y-6'>
                                {courses.course &&
                                    courses.course.map((course) => (
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

    return (
        <>{isLoad ? <div className='flex justify-center items-center h-screen'>Loading...</div> : <MainComponent />}</>
    )
}
export default AllCoursePage
