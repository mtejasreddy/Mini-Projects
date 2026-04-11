function Question({ question, options, onOptionClick, selectedOption }) {
  if (!options) return <p>Loading...</p>;
  return (
    <div className="question-box">
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onOptionClick(option)}
            disabled={selectedOption !== null}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor:
                selectedOption === option ? "#d1e7dd" : "#f0f0f0",
              border: "1px solid #333",
              cursor: selectedOption ? "not-allowed" : "pointer",
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
