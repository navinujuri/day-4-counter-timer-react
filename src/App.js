import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);
  let timer;
  function handler(e) {
    if (e.key === "Enter") {
      clearInterval(timer);
      if (!isNaN(e.target.value) && e.target.value > 0) {
        setcounter((prev) => parseInt(e.target.value));
      } else setcounter(0);
    }
  }

  useEffect(() => {
    if (counter > 0) {
      timer = setInterval(() => {
        setcounter((prev) => prev - 1);
        clearInterval(timer);
      }, 1000);
    }
  }, [counter]);

  return (
    <>
      <h1>Countdown Timer</h1>
      <input
        type="text"
        id="timeCount"
        placeholder="Please Enter CountDown Start Value"
        onKeyDown={handler}
      />

      <div id="current-time">{counter}</div>
    </>
  );
}

export default App;
