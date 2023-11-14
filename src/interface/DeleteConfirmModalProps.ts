import { CourseItemInterface } from '@/api/courseService'

export default interface DeleteConfirmModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: (courseId: string) => void
    course: CourseItemInterface
}
