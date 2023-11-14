import DeleteConfirmModal from '@/components/DeleteConfirmModal';
import { CourseInterface } from '@/interface/Course';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const mockCourses: CourseInterface[] = [
    {
        courseId: 'CS101',
        courseName: 'Introduction to Computer Science',
        courseDescription:
            'An introductory course to the fundamentals of computer science',
        facultyDepartment: 'Computer Science',
        academicTerm: 'Fall',
        academicYear: 2023,
        professors: 'Prof. John Doe',
        prerequisites: 'None',
        status: 'Open',
        curriculumName: 'BSc Computer Science',
        degreeLevel: 'Undergraduate',
        teachingHours: 3
    },
    {
        courseId: 'MATH201',
        courseName: 'Advanced Mathematics',
        courseDescription:
            'A detailed look into advanced mathematical theories',
        facultyDepartment: 'Mathematics',
        academicTerm: 'Spring',
        academicYear: 2023,
        professors: 'Prof. Jane Smith',
        prerequisites: 'MATH101',
        status: 'Open',
        curriculumName: 'BSc Mathematics',
        degreeLevel: 'Undergraduate',
        teachingHours: 4
    }
    // Add more courses as needed
];

const AllCoursePage = () => {
    const [selectedCourse, setSelectedCourse] =
        useState<CourseInterface | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [courses, setCourses] = useState<CourseInterface[]>(mockCourses);
    const navigate = useNavigate();

    const handleDelete = (course: CourseInterface) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = (courseId: string) => {
        console.log('Confirmed deletion of course with ID:', courseId);
        setIsModalOpen(false);
        // Here you can add logic to delete the course from the state or backend
        // For example, filtering out the deleted course:
        setCourses((prevCourses: CourseInterface[]) =>
            prevCourses.filter(
                (course: CourseInterface) => course.courseId !== courseId
            )
        );
    };

    const handleEdit = (course: CourseInterface) => {
        navigate('/main/form/create', { state: { course } });
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            All Courses
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            {courses.map((course) => (
                                <div
                                    key={course.courseId}
                                    className="bg-white p-4 rounded-lg shadow-md"
                                >
                                    <h2 className="text-lg font-bold">
                                        {course.courseName}
                                    </h2>
                                    <p>{course.courseDescription}</p>
                                    {/* Edit button */}
                                    <button
                                        onClick={() => handleEdit(course)}
                                        className="w-full bg-black hover:bg-gray-700 text-white font-medium rounded-lg px-4 py-2 mt-6"
                                    >
                                        Edit
                                    </button>
                                    {/* Delete button */}
                                    <button
                                        onClick={() => handleDelete(course)}
                                        className="w-full bg-black hover:bg-gray-700 text-white font-medium rounded-lg px-4 py-2 mt-6"
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
                course={selectedCourse || {}}
            />
        </section>
    );
};
export default AllCoursePage;
