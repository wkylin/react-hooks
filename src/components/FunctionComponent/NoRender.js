import React, { useState, useEffect } from 'react';

const NoRender = () => {
  console.log('Does it render?');

  // const [count, setCount] = useState(0);
  const initialCount = +localStorage.getItem('storageCount') || 0;
  const [count, setCount] = useState(initialCount);

  console.log(`My count is ${count}!`);

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  // useEffect(() => localStorage.setItem('storageCount', count));
  useEffect(() => localStorage.setItem('storageCount', count), [count]);

  return (
    <div>
      <h1>{count}</h1>

      <button type='button' onClick={handleIncrement}>
        Increment
      </button>
      <button type='button' onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default NoRender;
