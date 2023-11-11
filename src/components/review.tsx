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
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <Card className="w-[350px]">
      <CardHeader>
      <div>
        <h2>Course Viewer</h2>
        {courses.map((course) => (
          <CourseInfo key={course.id} course={course} />
        ))}
      </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="RATING">Rating</Label>
              <Input id="RATING" type="number" min = "0" max = "10" />
            </div>
            
            <Textarea htmlFor="MESSAGE" placeholder="Review here" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Review</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
export default Review;







