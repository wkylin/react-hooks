import React from 'react'

export default function usePrevious(value) {
  const ref = React.useRef(value)
  React.useEffect(() => {
    ref.current = value
  })
  return ref.current
}
