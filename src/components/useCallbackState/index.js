import React, { useCallback } from 'react'

const CallbackForState = () => {
  const [clickId, setClickId] = React.useState(0)
  const callback = useCallback(() => 'Hello WORLD' + Math.random(), [clickId])
  return (
    <button
      onClick={() => {
        // Make the callback stale
        setClickId((prev) => prev + 1)
      }}
    >
      Click me {callback()}
    </button>
  )
}

export default CallbackForState
