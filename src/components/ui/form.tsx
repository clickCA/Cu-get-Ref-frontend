import React, { FC, ChangEvent, MouseEvent, useState, Dispatch, SetstateAction}
import {CourseProps} from '../interface/courseInterface'
import { Label } from './label';
import { Input } from './input';

interface Props {
    courseList: CourseProps["courseList"],
    setCourseList: Dispatch<SetstateAction<CourseProps["courseList"]>>

}

const Form: FC<Props> =({courseList,setCourseList})=>{
    
    const [courseId,setCourseId] = useState("");
    const [courseName,setCourseName] = useState("");
    const [courseDescription,setCourseDescription] = useState("");
    const [facultyDepartment,setFacultyDepartment] = useState("");
    const [academicTerm,setAcademicTerm] = useState("");
    const [academicYear,setAcademicYear] = useState(0);
    const [professors,setProfessors] = useState("");
    const [prerequisites,setPrerequisites] = useState("");
    const [status,setStatus] = useState("");
    const [curriculumName,setCurriculumName] = useState("");
    const [degreeLevel,setDegreeLevel] = useState("");
    const [teachingHours,setTeachingHours] = useState(0);

    const setCourseIdInputHandler = (event:ChangEvent<HTMLInputElement>)=>{
        setCourseId(event.target.value);
    }
    const setCourseNameInputHandler = (event:ChangEvent<HTMLInputElement>)=>{
        setCourseName(event.target.value);
    }
    const setCourseDescriptionInputHandler = (event:ChangEvent<HTMLInputElement>)=>{
        setCourseDescription(event.target.value);
    }
    const setFacultyDepartmentInputHandler = (event:ChangEvent<HTMLInputElement>)=>{
        setFacultyDepartment(event.target.value);
    }
    const setAcademicTermInputHandler = (event:ChangEvent<HTMLInputElement>)=>{
        setAcademicTerm(event.target.value);
    }
    const setAcademicYearInputHandler = (event:ChangEvent<HTMLInputElement>)=>{
        setAcademicYear(event.target.value);
    }
    const setProfessorsInputHandler = (event:ChangEvent<HTMLInputElement>)=>{
        setProfessors(event.target.value);
    }
    const setPrerequisitesInputHandler = (event:ChangEvent<HTMLInputElement>)=>{
        setPrerequisites(event.target.value);
    }
    const setStatusInputHandler = (event:ChangEvent<HTMLInputElement>)=>{
        setStatus(event.target.value);
    }
    const setCurriculumNameInputHandler = (event:ChangEvent<HTMLInputElement>)=>{
        setCurriculumName(event.target.value);
    }
    const setDegreeLevelInputHandler = (event:ChangEvent<HTMLInputElement>)=>{
        setDegreeLevel(event.target.value);
    }
    const setTeachingHoursInputHandler = (event:ChangEvent<HTMLInputElement>)=>{
        setTeachingHours(event.target.value);
    }

    const handleClick = (event: MouseEvent<HTMLButtonElement>)=>{
        const courseData = {courseId, courseName, courseDescription, facultyDepartment, academicTerm, academicYear, professors, prerequisites, status, curriculumName, degreeLevel, teachingHours}
        setCourseList([...courseList, courseData])
        setCourseId("");
        setCourseName("");
        setCourseDescription("");
        setFacultyDepartment("");
        setAcademicTerm("");
        setAcademicYear(0);
        setProfessors("");
        setPrerequisites("");
        setStatus("");
        setCurriculumName("");
        setDegreeLevel("");
        setTeachingHours(0);

    }


    return(
        <div>
            <h1>Form</h1>
            <div className = "form-container">
                <div className = "form-div">
                    <Label htmlFor = "courseId">CourseId</Label>
                    <Input type="text" name = "courseId" value = {courseId} onChange = {setCourseIdInputHandler}> <Input/>
                <div/>
                <div className = "form-div">
                    <Label htmlFor = "courseName">Course Name</Label>
                    <Input type="text" name = "courseName" value = {courseName} onChange = {setCourseNameInputHandler}> <Input/>
                <div/>
                <div className = "form-div">
                    <Label htmlFor = "courseDescription">Course Description</Label>
                    <Input type="text" name = "courseDescription" value = {courseDescription} onChange = {setCourseDescriptionInputHandler}> <Input/>
                <div/>
                <div className = "form-div">
                    <Label htmlFor = "facultyDepartment">Faculty Department</Label>
                    <Input type="text" name = "facultyDepartment" value = {facultyDepartment} onChange = {setFacultyDepartmentInputHandler}> <Input/>
                <div/>
                <div className = "form-div">
                    <Label htmlFor = "academicTerm">Academic Term</Label>
                    <Input type="text" name = "academicTerm" value = {academicTerm} onChange = {setAcademicTermInputHandler}> <Input/>
                <div/>
                <div className = "form-div">
                    <Label htmlFor = "academicYear">Academic Year</Label>
                    <Input type="number" name = "academicYear" value = {academicYear} onChange = {setAcademicYearInputHandler}> <Input/>
                <div/>
                <div className = "form-div">
                    <Label htmlFor = "professors">Professors</Label>
                    <Input type="text" name = "professors" value = {professors} onChange = {setProfessorsInputHandler}> <Input/>
                <div/>
                <div className = "form-div">
                    <Label htmlFor = "prerequisites">Prerequisites</Label>
                    <Input type="text" name = "prerequisites" value = {prerequisites} onChange = {setPrerequisitesInputHandler}> <Input/>
                <div/>
                <div className = "form-div">
                    <Label htmlFor = "status">Status</Label>
                    <Input type="text" name = "status" value = {status} onChange = {setStatusInputHandler}> <Input/>
                <div/>
                <div className = "form-div">
                    <Label htmlFor = "curriculumName">Curriculum Name</Label>
                    <Input type="text" name = "curriculumName" value = {curriculumName} onChange = {setCurriculumNameInputHandler}> <Input/>
                <div/>
                <div className = "form-div">
                    <Label htmlFor = "degreeLevel">Degree Level</Label>
                    <Input type="text" name = "degreeLevel" value = {degreeLevel} onChange = {setDegreeLevelInputHandler}> <Input/>
                <div/>
                <div className = "form-div">
                    <Label htmlFor = "teachingHours">Teaching Hours</Label>
                    <Input type="number" name = "teachingHours" value = {teachingHours} onChange = {setTeachingHoursInputHandler}> <Input/>
                <div/>
            </div>
        </div>
    )
}

