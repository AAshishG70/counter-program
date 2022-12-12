import React, { useReducer } from "react";

const Counter = ({ initialValue = { count: 0, total: 100 }, step = 1 }) => {
  const [state, dispatch] = useReducer(countReducer, initialValue);

  function countReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
        break;
      case "decrement":
        return { ...state, count: state.count - action.step };
        break;
      default:
        break;
    }
  }

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement", step });
  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h1>{state.count}</h1>
    </>
  );
};

const App = () => {
  return <Counter />;
};

export default App;
