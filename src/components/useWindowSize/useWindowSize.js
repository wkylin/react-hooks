import { useEffect, useState } from 'react'

import useThrottledEffect from '../DebouncedInput/useThrottledEffect'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    let isMounted = true

    function handleResize() {
      if (isMounted) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    window.addEventListener('resize', useThrottledEffect(handleResize, 200))
    return () => {
      isMounted = false
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
