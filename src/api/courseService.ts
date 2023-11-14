export interface CoursesInterface {
    course: CourseItemInterface[]
}
export interface CourseItemInterface {
    course_id: string
    course_name: string
    course_description: string
    faculty_department: string
    academic_term: string
    academic_year: number
    professors: ProfessorInterface[]
    prerequisites: PrerequisiteInterface[]
    status: string
    curriculum_name: string
    degree_level: string
    teaching_hours: number
}

export interface ProfessorInterface {
    professor_name: string
}

export interface PrerequisiteInterface {
    course_id: string
}

export interface CourseId {
    course_id: string
}

export async function getAllCourses(path: string) {
    return await fetch(`${path}/courses`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json().then((data: CoursesInterface) => {
                    console.log('Get All Course', data)
                    return data
                })
            } else {
                throw new Error('Get All Courses failed')
            }
        })
        .catch((err) => {
            if (err.message === 'Get All Courses failed') throw new Error('Get All Courses failed')
            throw new Error("Couldn't connect to the server")
        })
}

export async function getCourse(path: string, body: CourseId) {
    return await fetch(`${path}/courses/${body.course_id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json().then((data: CourseItemInterface) => {
                    return data
                })
            } else {
                throw new Error('Get Course failed')
            }
        })
        .catch((err) => {
            if (err.message === 'Get Course failed') throw new Error('Get Course failed')
            throw new Error("Couldn't connect to the server")
        })
}

export async function addNewCourse(path: string, body: CourseItemInterface) {
    return await fetch(`${path}/courses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((res) => {
            if (res.ok) {
                return res.json().then((data: CourseItemInterface) => {
                    return data
                })
            } else {
                throw new Error('Create New Course failed')
            }
        })
        .catch((err) => {
            if (err.message === 'Create New Course failed') throw new Error('Create New Course failed')
            throw new Error("Couldn't connect to the server")
        })
}

export async function updateCourseDetail(path: string, body: CourseItemInterface) {
    return await fetch(`${path}/courses/${body.course_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((res) => {
            if (res.ok) {
                return res.json().then((data: CourseItemInterface) => {
                    return data
                })
            } else {
                throw new Error('Update Course Failed')
            }
        })
        .catch((err) => {
            if (err.message === 'Update Course Failed') throw new Error('Update Course Failed')
            throw new Error("Couldn't connect to the server")
        })
}

export async function deleteCourse(path: string, body: CourseId) {
    return await fetch(`${path}/courses/${body.course_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            if (res.ok) {
                return res.json().then(() => {
                    console.log('Finish delete course')
                })
            } else {
                throw new Error('Delete course failed')
            }
        })
        .catch((err) => {
            if (err.message === 'Delete course failed') throw new Error('Delete course failed')
            throw new Error("Couldn't connect to the server")
        })
}
