import React from 'react'
import useScrollDirection from './useScrollDirection'

const UseScrollDirectionDemo = () => {
  const [prevOffset, scrollDirection] = useScrollDirection()
  return (
    <div style={{ position: 'fixed', top: 30 }}>
      <div>prevOffset: {prevOffset}</div>
      <div>scrollDirection: {scrollDirection}</div>
    </div>
  )
}

export default UseScrollDirectionDemo
