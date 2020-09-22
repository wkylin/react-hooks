import { useState, useRef } from 'react'

function useAsyncReference(value, isProp = false) {
  const ref = useRef(value)
  const [, forceRender] = useState(false)

  function updateState(newState) {
    if (!Object.is(ref.current, newState)) {
      ref.current = newState
      forceRender((s) => !s)
    }
  }

  if (isProp) {
    ref.current = value
    return ref
  }

  return [ref, updateState]
}

export default useAsyncReference

// https://css-tricks.com/dealing-with-stale-props-and-states-in-reacts-functional-components/
