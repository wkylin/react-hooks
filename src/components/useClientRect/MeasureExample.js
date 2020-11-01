import React from 'react'

import useClientRect from './useClientRect'

export default function MeasureExample() {
  const [rect, ref] = useClientRect()

  console.log('rect', rect)
  return (
    <>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null && (
        <h2>The above header is {Math.round(rect.height)}px tall</h2>
      )}
    </>
  )
}
