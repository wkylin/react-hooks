import React, { useState, useMemo } from 'react';

function Child1(props) {
  console.log("Child1 Rendered");
  return <p>{props.counter}</p>;
}

function Parent(){
  const [counter, setCounter] = useState(0)
  
  function heavyComputationFunction(){
    console.log("heavyComputationFunction ran!")
    return "I return value that takes time to generate!"
  }
  
  // let message = heavyComputationFunction()
  // const message = useMemo(heavyComputationFunction, []);
  const message = useMemo(heavyComputationFunction, [counter]);
  
  return (
    <>
      <Child1 counter={counter}/>
      <p>{message}</p>
      <button
        onClick={
          () => setCounter(prev => prev + 1)
        }
      >
        Increment
      </button>
    </>
  )
}

export default Parent;
