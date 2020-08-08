import React, { useState, memo } from 'react';

const Child1Fn = ({ obj }) => {
  console.log(`Child${obj.number.one} rendered`);
  return <div style={{ border: '1px solid red', padding: '30px' }}>Child1</div>;
};
const Child1 = memo(Child1Fn);

const areEqual = (prevProps, nextProps) => {
  console.log(prevProps);
  console.log(nextProps);
  const isEqual = prevProps.obj.number.one === nextProps.obj.number.one && prevProps.obj.number.two === nextProps.obj.number.two;
  console.log('isEqual', isEqual);
  return isEqual;
}

const Child2Fn = ({ obj }) => {
  console.log(`Child${obj.number.two} rendered`);
  return (
    <div style={{ border: '1px solid red', padding: '30px' }}>
      Child2
    </div>
  );
}
const Child2 = memo(Child2Fn, areEqual);

const Parent2 = () => {
  console.log('Parent rendered');

  let [count, setCount] = useState(0);
  const handleMouseEnter = () => setCount(prevCount => prevCount + 1);
  const obj = {
    number: {
      one: 1,
      two: 2
    }
  };

  return (<div onMouseEnter={handleMouseEnter} style={{ border: '1px solid black', padding: '50px' }}>
      Parent. Count: {count}
      <Child1 obj={obj} />
      <Child2 obj={obj} />
    </div>
  );
};
export default Parent2;
