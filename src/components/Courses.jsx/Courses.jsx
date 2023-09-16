import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (

        <div className="w-3/4">
            <h1>Courses :{courses.length}</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 md:gap-5 lg:gap-10">
                {
                     courses.map(course =><Course
                        course={course}
                        key={course.id}>
                        </Course>)
                }
            </div>
        </div>

    );
};

export default Courses;