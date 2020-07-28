import React, { useState } from 'react';
import Child1 from './Children1';
import Child2 from './Children2';

const Parent = () => {
  console.log('Parent rendered');

  let [count, setCount] = useState(0);
  const handleMouseEnter = () => setCount(prevCount => prevCount + 1);

  return (
    <div onMouseEnter={handleMouseEnter} style={{ border: '1px solid black', padding: '50px' }}>
      Parent. Count: {count}
      <Child1 />
      <Child2 />
    </div>
  );
};
export default Parent;

// const Parent = ({ children }) => {
//   console.log('Parent rendered')
//
//   let [count, setCount] = useState(0)
//   const handleMouseEnter = () => setCount(prevCount => prevCount + 1)
//
//   return <div onMouseEnter={handleMouseEnter} style = {{border: '1px solid black', padding: '50px'}}>
//     Parent. Count: {count}
//     {children}
//   </div>
// }
// export default () => <Parent><Child1/><Child2/></Parent>
