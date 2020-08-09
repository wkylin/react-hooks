import { useRef, useEffect } from 'react'

// accept a ref to keep in sync
const useSyncedRef = (ref) => {
  // create a new ref
  const innerRef = useRef()

  // keep both refs in sync
  useEffect(() => {
    // handle no ref... ^_^U
    if (!ref) return

    // handle callback refs
    if (typeof ref === 'function') {
      ref(innerRef.current)
    }
    // handle object refs
    else {
      ref.current = innerRef.current
    }
  })

  // return the new ref
  return innerRef
}

export default useSyncedRef;