import { useEffect } from 'react'

const useDebouncedEffect = (fn, deps, time) => {
  const dependencies = [...deps, fn, time]
  useEffect(() => {
    const timeout = setTimeout(fn, time)
    return () => {
      clearTimeout(timeout)
    }
  }, dependencies)
}

export default useDebouncedEffect
