import React, { useState, useRef } from 'react';

function ClickButton(props) {
  // const [count, setCount] = useState(0);

  // const onClickCount = () => {
  //   setCount((c) => c + 1);
  // };

  const count = useRef(0);

  const onClickCount = () => {
    count.current++;
  };


  const onClickRequest = () => {
    console.log(count.current);
  };

  console.log('re render');
  console.log(count.current);

  return (
    <div>
      <button onClick={onClickCount}>Counter</button>
      <button onClick={onClickRequest}>Submit</button>
    </div>
  );
}

export default ClickButton;