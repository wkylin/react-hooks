import React, { useState } from 'react';

const ChildComponent1Fn = () => {
  console.log('Child1 Rendered');
  return <p>Hello World!</p>;
};
let ChildComponent1 = React.memo(ChildComponent1Fn);

const ChildComponent2Fn = (props) => {
  console.log('Child2 Rendered');
  return <p>{props.counter}</p>;
};
let ChildComponent2 = React.memo(ChildComponent2Fn);

const ChildComponent3Fn = (props) => {
  console.log('Child3 Rendered');
  return <p>{props.anotherCounter}</p>;
}
let ChildComponent3 = React.memo(ChildComponent3Fn);

const ParentComponent = () => {
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

export default ParentComponent;
