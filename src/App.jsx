import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const handleOnClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };
  return (
    <>
      <div className="parentConatiner">
        <div className="container">
          <p>Calulator</p>
          <input
            type="text"
            className="inputField"
            placeholder="0"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="resultField">{result}</div>
          <div className="buttonConatiner">
            {buttons.map((items) => (
              <button
                key={items}
                className="btn"
                onClick={() => handleOnClick(items)}
              >
                {items}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
