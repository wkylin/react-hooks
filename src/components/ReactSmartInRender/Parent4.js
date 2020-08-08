import React, { useState } from 'react';

function ParentComponent() {
  console.log('Parent Rendered');
  const [counter, setCounter] = useState(0);
  const [anotherCounter] = useState(0);
  return (
    <>
      <ChildComponent1 />
      <ChildComponent2 counter={counter} />
      <ChildComponent3 anotherCounter={anotherCounter} />
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </>
  );
}

function ChildComponent1() {
  console.log('Child1 Rendered');
  return <p>Hello World!</p>;
}

function ChildComponent2(props) {
  console.log('Child2 Rendered');
  return <p>{props.counter}</p>;
}

function ChildComponent3(props) {
  console.log('Child3 Rendered');
  return <p>{props.anotherCounter}</p>;
}

export default ParentComponent;
