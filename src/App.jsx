import { useState, useCallback, useRef } from 'react'
import StudentCard from "./components/StudentCard";
import RegisterCourse from "./components/RegisterCourse";

function App() {
  const [courses, setCourses] = useState([
      {
        id: 1,
        name: "English for Information Technology 2",
        credits: 3,
        grade: 9,
        attending: true,
        difficulty: "Easy",
      },
      {
        id: 2,
        name: "Operating Systems",
        credits: 6,
        grade: 8,
        attending: true,
        difficulty: "Hard",
      },
      {
        id: 3,
        name: "Applied Probability and Statistics",
        credits: 6,
        grade: 7,
        attending: true,
        difficulty: "Modarate",
      },
  ]);
  const registerCount = useRef(0);

  const handleRegister = useCallback(
    (newCourse) => {
      registerCount.current += 1;
      console.log(`Total courses registered this session: ${registerCount.current}`);
      setCourses((prev) => [...prev, newCourse]);
    },
    []
  );

  return (
      <>
        <div>
          <h1>Egecan Akincioglu</h1>
          <p>Student Number: 132492</p>
          <p>Below is a list of the courses I am registered for this semester.</p>

          {courses.map((course) => (
            <StudentCard key={course.id} course={course} />
          ))}

          <RegisterCourse onRegister={handleRegister} />
          </div>
      </>
  )
}

export default App
