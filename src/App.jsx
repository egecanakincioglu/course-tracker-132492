import { useState } from 'react'
import StudentCard from "./components/StudentCard";

function App() {
  const [courses, setCourses] = useState([
      {
        id: 1,
        name: "English for Information Technology 2",
        credits: 3,
        grade: 95,
        attending: true,
        difficulty: "Easy",
      },
      {
        id: 2,
        name: "Operating Systems",
        credits: 6,
        grade: 80,
        attending: true,
        difficulty: "Hard",
      },
      {
        id: 3,
        name: "Applied Probability and Statistics",
        credits: 6,
        grade: 75,
        attending: true,
        difficulty: "Modarate",
      },
  ]);

  return (
      <>
        <div>
          <h1>Egecan Akincioglu</h1>
          <p>Student Number: 132492</p>
          <p>Below is a list of the courses I am registered for this semester.</p>

          {courses.map((course) => (
            <StudentCard key={course.id} course={course} />
          ))}
          </div>
      </>
  )
}

export default App
