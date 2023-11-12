import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CourseInterface } from '@/interface/course.interface';
const CourseInfo: React.FC<{ course: CourseInterface }> = ({ course }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
    <div>
      <h3>{course.courseId}</h3>
      <h3>{course.courseName}</h3>
      <p>{course.courseDescription}</p>
      <p>{course.facultyDepartment}</p>
      <p>{course.academicTerm}</p>
      <p>{course.academicYear}</p>
    </div>
    <div>
      <p>{course.professors}</p>
      <p>{course.prerequisites}</p>
      <p>{course.status}</p>
      <p>{course.curriculumName}</p>
      <p>{course.degreeLevel}</p>
      <p>{course.teachingHours}</p>
    </div>
  </div>
);
export function Review() {
  const [courses, setCourses] = useState<CourseInterface[]>([]);
  useEffect(() => {
    // Fetch course data (mock data for demonstration)
    const fetchData = async () => {
      try {
        // Assuming you have an API endpoint to fetch course data
        const response = await fetch('/api/courses');
        const data = await response.json();

        // Update the state with the fetched courses
        setCourses(data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount


  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
         <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
          Cu get ref
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Review the course
            </h1>
            <div>
            <h2>Course Viewer</h2>
              {courses.map((course) => (
              <CourseInfo key={course.id} course={course} />
            ))}
            </div>
            <form className="space-y-4 md:space-y-6" action="#">
            <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="rating">Rating</Label>
              <Input id="rating" type="number" min = "1" max = "5" />
            </div>
            
            <Textarea htmlFor="message" placeholder="Review here" />
          </div> 
              
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Review;







