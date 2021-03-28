import React, { useRef } from 'react'
import useDimension from './useDimension'

function UseDimensionDemo() {
  const divRef = useRef(null)
  const { height, width } = useDimension(divRef)
  return (
    <div
      className="App"
      style={{ display: 'flex', height: '400px', padding: '4px' }}
    >
      <div
        ref={divRef}
        style={{
          backgroundColor: '#1abc9c',
          padding: '4px',
          height: '80%',
          flexGrow: 1,
        }}
      >
        <div>
          div height= {height} and width= {width}
        </div>
      </div>
    </div>
  )
}

export default UseDimensionDemo
