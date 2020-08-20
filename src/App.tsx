import * as React from "react";
import "./styles.css";

export default function App() {
  const [val, setVal] = React.useState(0);

  const handleIncrement = () => {
    setVal((val) => val + 1);
  };

  const handleDecrement = () => {
    if (val <= 0) return false;
    setVal((val) => val - 1);
  };
  return (
    <div className="App">
      <button onClick={handleDecrement}>-</button>
      <>{val}</>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
