import React, { useState, useEffect, useRef, forwardRef } from 'react';

const ForwardRef = () => {
  const [greeting, setGreeting] = useState('Hello React!');

  const handleChange = (event) => setGreeting(event.target.value);

  const ref = useRef();

  useEffect(() => ref.current.focus(), []);

  return (
    <div>
      <h1>{greeting}</h1>

      <Input value={greeting} handleChange={handleChange} ref={ref} />
    </div>
  );
};

const forwardRefFn = ({ value, handleChange }, ref) => (
  <input type="text" value={value} onChange={handleChange} ref={ref} />
);
const Input = forwardRef(forwardRefFn);

export default ForwardRef;
