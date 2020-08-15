import React, { useState } from 'react'

export default function UseRefApp() {
  const divRef = React.useRef()
  // const valueRef = React.useRef(90)
  const valueRef = React.createRef()
  const [, setDummyState] = useState()
  return (
    <div>
      Value: {valueRef.current}
      <div id="divR" ref={divRef}>
        App, here
      </div>
      <button
        onClick={() => {
          setDummyState({})
          valueRef.current = 88
        }}
      >
        Incr
      </button>
    </div>
  )
}

// when the function App is re-rendered, the function is run and this will re-initialize and re-create all expressions and statements in its body. So the createRef will be run every time and the value will always be null.
