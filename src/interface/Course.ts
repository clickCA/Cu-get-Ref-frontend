export interface CourseInterface {
    courseId: string
    courseName: string
    courseDescription: string
    facultyDepartment: string
    academicTerm: string
    academicYear: number
    professors: string
    prerequisites: string
    status: string
    curriculumName: string
    degreeLevel: string
    teachingHours: number
}

export interface CourseProps {
    courseId: string
    courseName: string
    courseDescription: string
    facultyDepartment: string
    academicTerm: string
    academicYear: number
    professors: string
    prerequisites: string
    status: string
    curriculumName: string
    degreeLevel: string
    teachingHours: number
}
// {
//     "academic_term": "summer",
//     "academic_year": 2023,
//     "course_description": "1. Introduction to Software Architecture",
//     "course_id": "2110416",
//     "course_name": "Software Architecture",
//     "curriculum_name": "computer engineering",
//     "degree_level": "bachelor",
//     "faculty_department": "Computer Engineering",
//     "prerequisites": [
//         {
//             "course_id": "1112346"
//         },
//         {
//             "course_id": "1112347"
//         },
//         {
//             "course_id": "1112348"
//         },
//         {
//             "course_id": "1112349"
//         },
//         {
//             "course_id": "1112350"
//         }
//     ],
//     "professors": [
//         {
//             "professor_name": "somchai jaidee"
//         },
//         {
//             "professor_name": "somchai jaidee"
//         },
//         {
//             "professor_name": "somchai jaidee"
//         }
//     ],
//     "status": "open",
//     "teaching_hours": 3
// }
