import React from 'react'

import useMouseHook from './useMouseHook'

const UseMouseHookDemo = () => {
  const nodeRef = React.useRef()
  const { mousePos } = useMouseHook(nodeRef)

  return (
    <div ref={nodeRef} style={{ height: '100%' }}>
      <p>
        <code>useMouseHook props: </code>
        Mouse position with custom hook {mousePos.x}, {mousePos.y}
      </p>
    </div>
  )
}

export default UseMouseHookDemo
