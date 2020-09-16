import React, { useState } from 'react';

import usePrevious from './usePrevious';

const UsePreviousDemo = () => {

  const [counter, setCounter] = useState(0);

  const preCounter = usePrevious(counter);


  const clickCounter = () => {
    setCounter(prev => prev + 1);
  }

  const getLatestCounter = () => {
    console.log(preCounter)
  }

  return (
    <div>
      <div onClick={clickCounter}>Count</div>

      <div onClick={getLatestCounter}>get counter</div>
    </div>
  )

}

export default UsePreviousDemo;
