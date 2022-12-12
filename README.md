## TryOut Codes

import React, { useState, useEffect } from "react";

const App = () => {
const [state, setState] = useState({ name: "Alex", age: "" });
console.log(state);

useEffect(() => {
setState((prevState) => ({ ...prevState, age: 25 }));
}, []);
// [] is the dependency array

return <div> Hello World! </div>;
};

export default App;
