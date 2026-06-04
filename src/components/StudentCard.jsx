function StudentCard({ course }) {
    const isAtRisk = course.grade < 50 && course.attending === false;
    const isEligibleForDistinction = course.grade >= 85;

    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "12px", borderRadius: "8px" }}>
            <h3>{course.name}</h3>
            <p>Credits: {course.credits}</p>
            <p>Grade: {course.grade}</p>
            <p>Attending: {course.attending ? "Yes" : "No"}</p>
            <p>Difficulty: {course.difficulty}</p>

            {isAtRisk && (
                <p style={{ color: "red", fontWeight: "bold" }}>At Risk</p>
            )}

            {isEligibleForDistinction && (
                <p style={{ color: "green", fontWeight: "bold" }}>Eligible for Distinction</p>
            )}
        </div>
    )
}

export default StudentCard;