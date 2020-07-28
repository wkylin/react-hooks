import React, { useState, memo, useCallback } from 'react';

const Child1 = memo(({ num, sayHiInChildren }) => {
  console.log(`Child${num} rendered`);
  sayHiInChildren('Child1');
  return (
    <div style={{ border: '1px solid red', padding: '30px' }}>
      Child1
    </div>
  );
});

const areEqual = (prevProps, nextProps) => {
  console.log('prevProps.num === nextProps.num', prevProps.num === nextProps.num);
  console.log('prevProps.sayHiInChildren === nextProps.sayHiInChildren',prevProps.sayHiInChildren === nextProps.sayHiInChildren);
  const isEqual = prevProps.num === nextProps.num && prevProps.sayHiInChildren === nextProps.sayHiInChildren;
  console.log('isEqual', isEqual);
  return isEqual;
};


const Child2 = memo(({ num, sayHiInChildren }) => {
  console.log(`Child${num} rendered`);
  sayHiInChildren('Child2');
  return (
    <div style={{ border: '1px solid red', padding: '30px' }}>
      Child2
    </div>);
}, areEqual);

// const Parent = () => {
//   console.log('Parent rendered');
//
//   let [count, setCount] = useState(0);
//   const handleMouseEnter = () => setCount(prevCount => prevCount + 1);
//   const sayHiInChildren = child => console.log(`hi~~~~~~~~~ - from ${child}`);
//   // const sayHiInChildren = useCallback(child => console.log(`hi~~~~~~~~~ — from ${child}`), [])
//
//   return (
//     <div onMouseEnter={handleMouseEnter} style={{ border: '1px solid black', padding: '50px' }}>
//       Parent. Count: {count}
//       <Child1 num={1} sayHiInChildren={sayHiInChildren} />
//       <Child2 num={2} sayHiInChildren={sayHiInChildren} />
//     </div>
//   );
// };

class Parent extends React.Component {
  state={
    count: 0
  }
  
  sayHiInChildren = child => console.log(`hi~~~~~~~~~ - from ${child}`);
  
  handleMouseEnter = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {
    return <div onMouseEnter={this.handleMouseEnter} style = {{border: '1px solid black', padding: '50px'}}>
      Parent. Count: {this.state.count}
      <Child1 num={1} sayHiInChildren={this.sayHiInChildren}/>
      <Child2 num={2} sayHiInChildren={this.sayHiInChildren}/>
    </div>
  }
}
export default Parent;
