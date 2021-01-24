import React from 'react';

import useDimensions from './useDimensions'

const MyUseDimensions = () => {
  const [stepRef, stepSize] = useDimensions({liveMeasure: true})
  const [titleRef, titleSize] = useDimensions({liveMeasure: false});
  console.log('Step is at X: ', stepSize)
  console.log('Title is', titleSize.width, 'wide')
  return (
    <div style={{ width: 800, height: 600, background: '#aaa', margin: '20px auto'}}>
      <div ref={stepRef}>This is a step</div>
      <h1 ref={titleRef}>The title</h1>
    </div>
  )
}

export default MyUseDimensions
