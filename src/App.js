import Timer from "./components/Timer";
import "./App.css";
import { useState } from "react";

function App() {
  const [timerStatus, setTimetStatus] = useState(true);
  const handleToggleTimer = () => {
    setTimetStatus((status) => !status);
  };

  return (
    <div className="App">
      <Timer active={timerStatus} />
      <button onClick={handleToggleTimer}>
        {timerStatus ? "Stop timer" : "Play timer"}
      </button>

      <div>
        <h2>Api info</h2>
        <ul>
          <li>Get: https://api-generator.retool.com/TBCf1O/data</li>
          <li>
            Filter:
            https://api-generator.retool.com/TBCf1O/data?%column_name%=%value
          </li>
          <li>Post: https://api-generator.retool.com/TBCf1O/data/</li>
          <li>
            Pust / Patch Delete:
            https://api-generator.retool.com/TBCf1O/data/%id
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
