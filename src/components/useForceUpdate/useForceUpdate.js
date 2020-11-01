import React from 'react'

const useForceUpdate = () => {
  const [, forceUpdateFix] = React.useState()

  return React.useCallback(() => {
    forceUpdateFix((s) => !s)
  }, [])
}

export default useForceUpdate
