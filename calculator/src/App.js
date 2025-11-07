import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      // Using eval() for simplicity; ideally use a safer parser in real apps
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />

      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+", "="].map(
          (btn) =>
            btn === "=" ? (
              <button key={btn} onClick={calculateResult}>
                {btn}
              </button>
            ) : (
              <button key={btn} onClick={() => handleClick(btn)}>
                {btn}
              </button>
            )
        )}
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
}

export default App;

