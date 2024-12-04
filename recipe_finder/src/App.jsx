import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="App">
        <h1>Counter App</h1>
        <p>Current Count: {count}</p>
        <button onClick={increment}>Increase</button>
      </div>
    </>
  );
}

export default App
