import React, { useState } from "react";

export default function App() {
  //  Define state
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${(score / 10) * 100}%`;
    
    // 2- Compute color
    let scoreColor = "#f3bc47"; 
    if (score >= 0 && score <= 3) {
      scoreColor = "#e74c3c"; 
    } else if (score > 3 && score <= 7) {
      scoreColor = "#f3bc47"; 
    } else if (score > 7 && score <= 10) {
      scoreColor = "#a9d453";   
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      height: "100%",
      transition: "width 0.3s ease-in-out, background-color 0.3s ease-in-out"
    };
  };

  return (
    <div className="score-panel" style={{ textAlign: "left", marginTop: "20px" }}>
      <h1>My Score in React</h1>

      <small>Enter a score 0 to 10: </small>
      <input
        type="number"
        min="0"
        max="10"
        value={score}
        onChange={(e) => {
          const newScore = Math.min(10, Math.max(0, Number(e.target.value)));
          setScore(newScore);
        }}
        style={{ marginLeft: "0px", padding: "5px", textAlign: "left", width: "100%",  borderRadius: "10px" }}
      />

      <div className="score-bar" style={{ border: "1px solid #ccc", height: "50px", width: "100%", marginTop: "10px", borderRadius: "10px" }}>
        <div className="score-bar-value" style={getScoreBarStyle()}></div>
      </div>
    </div>
  );
}
