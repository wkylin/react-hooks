import React, { useRef } from 'react'

import useScrollListener from './useScrollListener'

const UseScrollListenerDemo = () => {
  const containerRef = useRef(null)
  const handleScroll = () => console.log('was scrolled')

  useScrollListener(containerRef, handleScroll, 200)

  return (
    <div ref={containerRef} style={{ height: 400, overflow: 'auto' }}>
      <div style={{ height: 800 }}>use scroll listener</div>
    </div>
  )
}

export default UseScrollListenerDemo
