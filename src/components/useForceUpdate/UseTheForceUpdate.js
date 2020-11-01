import React from 'react'

import useForceUpdate from './useForceUpdate'

export default function UseTheForceUpdate() {
  const forceUpdateFix = useForceUpdate()
  const renderCount = React.useRef(0)

  React.useEffect(() => {
    renderCount.current += 1
  })

  const onClick = React.useCallback(() => {
    forceUpdateFix()
  }, [forceUpdateFix])

  return (
    <>
      <button type="button" onClick={onClick}>
        Use the Force
      </button>
      <div>Render count: {renderCount.current}</div>
    </>
  )
}
