import { useRef, useEffect, useCallback } from 'react'

export default function useEventCallback(fn, dependencies) {
  const ref = useRef(() => {
    throw new Error('Cannot call an event handler while rendering.')
  })

  useEffect(() => {
    ref.current = fn
  }, [fn, ...dependencies])

  return useCallback(() => {
    const fun = ref.current
    return fun()
  }, [ref])
}
