import { useEffect, useRef } from 'react'

export const useThrottledEffect = (fn, time, deps = []) => {
  const dependencies = [...deps, fn, time]

  const lastRan = useRef(Date.now())

  useEffect(() => {
    const handler = setTimeout(function () {
      if (Date.now() - lastRan.current >= time) {
        fn()
        lastRan.current = Date.now()
      }
    }, time - (Date.now() - lastRan.current))

    return () => {
      clearTimeout(handler)
    }
  }, [dependencies])
}

export default useThrottledEffect
