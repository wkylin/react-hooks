import React, { useState } from 'react';

const FnCom = () => {
  const [greeting, setGreeting] = useState('Hello Function Component!');

  const handleChange = (event) => setGreeting(event.target.value);

  return (
    <div>
      <Headline headline={greeting} />

      <Input value={greeting} onChangeInput={handleChange}>
        Set Greeting:
      </Input>
    </div>
  );
};

const Headline = ({ headline }) => <h1>{headline}</h1>;

const Input = ({ value, onChangeInput, children }) => (
  <label>
    {children}
    <input type='text' value={value} onChange={onChangeInput} />
  </label>
);

export default FnCom;
