function Result({ score, total }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2 style={{ color: "#4caf50" }}>Quiz Finished</h2>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Your score: {score} / {total}
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: "10px",
          backgroundColor: "#2196f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Restart Quiz
      </button>
    </div>
  );
}
export default Result;
