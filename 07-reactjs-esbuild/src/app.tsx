import React, { useState } from 'react';

//useState

export function App() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  )
}
