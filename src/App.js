import React, { useState } from "react";

const Counter = ({ initialValue = 0, one = 1 }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + one);
  return <button onClick={increment}>{count}</button>;
};

const App = () => {
  return <Counter />;
};

export default App;
