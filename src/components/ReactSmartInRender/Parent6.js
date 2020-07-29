import React, { useState, useCallback } from 'react';

function Parent() {
  
  const [counter, setCounter] = useState(0);
  
  
  function handleEvent() {
    console.log("Just a function!");
  }
  
  const memoizedFunction = useCallback(handleEvent, [])
  
  return (
    <>
      <Child1 counter={counter} />
      {/*<Child2 handleEvent={handleEvent} />*/}
      <Child2 handleEvent={memoizedFunction} />
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

function Child1(props) {
  console.log("Child1 Rendered");
  return <p>{props.counter}</p>;
}

let Child2 = React.memo(
  function (props) {
    console.log("Child2 Rendered");
    return <p>{props.handleEvent.toString()}</p>;
  }
);

export default Parent;
