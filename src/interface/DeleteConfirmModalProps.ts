import { CourseInterface } from "./Course";

export default interface DeleteConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (courseId: string) => void;
    course: CourseInterface;
}
