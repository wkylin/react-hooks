import React, { useState } from 'react';

const ReRender = () => {
  const [, setGreeting] = useState('Hello React!');
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((currentCount) => currentCount + 1);

  const handleDecrement = () => setCount((currentCount) => currentCount - 1);

  const handleChange = (event) => setGreeting(event.target.value);

  return (
    <div>
      <input type="text" onChange={handleChange} />

      <Count count={count} />

      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

const countFn = ({ count }) => {
  console.log('Does it (re)render?');

  return <h1>{count}</h1>;
};
const Count = React.memo(countFn);

export default ReRender;
