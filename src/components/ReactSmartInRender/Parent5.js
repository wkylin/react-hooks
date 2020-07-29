import React, { useState } from 'react';

let ChildComponent1 = React.memo(
  function () {
    console.log("Child1 Rendered");
    return <p>Hello World!</p>;
  }
);

let ChildComponent2 = React.memo(
  function (props) {
    console.log("Child2 Rendered");
    return <p>{props.counter}</p>;
  }
);

let ChildComponent3 = React.memo(
  function (props) {
    console.log("Child3 Rendered");
    return <p>{props.anotherCounter}</p>;
  }
);

function ParentComponent() {
  console.log("Parent Rendered");
  
  const [counter, setCounter] = useState(0);
  const [anotherCounter, setAnotherCounter] = useState(0);
  
  return (
    <>
      <ChildComponent1 />
      <ChildComponent2 counter={counter} />
      <ChildComponent3 anotherCounter={anotherCounter} />
      <button
        onClick={
          () => setCounter(prev => prev + 1)
        }
      >
        Increment
      </button>
    </>
  );
}


export default ParentComponent;
