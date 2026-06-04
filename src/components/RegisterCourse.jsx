import { useState } from "react";

function RegisterCourse({ onRegister }) {
  const [name, setName] = useState("");
  const [credits, setCredits] = useState("");
  const [grade, setGrade] = useState("");
  const [attending, setAttending] = useState(false);
  const [difficulty, setDifficulty] = useState("Easy");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "") {
      setError("Course name cannot be empty.");
      return;
    }

    const gradeNum = Number(grade);
    if (isNaN(gradeNum) || gradeNum < 5 || gradeNum > 10) {
      setError("Grade must be a number between 5 and 10.");
      return;
    }

    setError("");

    const newCourse = {
      id: Date.now(),
      name: name.trim(),
      credits: Number(credits),
      grade: gradeNum,
      attending: attending,
      difficulty: difficulty,
    };

    onRegister(newCourse);

    setName("");
    setCredits("");
    setGrade("");
    setAttending(false);
    setDifficulty("Easy");
  };

  return (
    <div style={{ border: "1px solid #aaa", padding: "16px", marginTop: "24px", borderRadius: "8px" }}>
      <h2>Register New Course</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>Course Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Credits: </label>
        <input
          type="number"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
        />
      </div>

      <div>
        <label>Current Grade: </label>
        <input
          type="number"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
      </div>

      <div>
        <label>Attending Regularly: </label>
        <input
          type="checkbox"
          checked={attending}
          onChange={(e) => setAttending(e.target.checked)}
        />
      </div>

      <div>
        <label>Difficulty: </label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      <button style={{ marginTop: "12px" }} onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
}

export default RegisterCourse;