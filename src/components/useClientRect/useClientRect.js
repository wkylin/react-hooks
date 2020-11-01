import { useState, useCallback } from 'react'

export default function useClientRect() {
  const [rect, setRect] = useState(null)
  const ref = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect())
    }
  }, [])
  return [rect, ref]
}
