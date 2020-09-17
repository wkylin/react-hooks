import React from 'react'

const useMouseHook = (ref) => {
  const [state, setState] = React.useState({ x: 0, y: 0 })
  const handleMouseMove = React.useCallback(
    (e) => {
      setState({
        x: e.clientX,
        y: e.clientY,
      })
    },
    [setState]
  )

  React.useEffect(() => {
    let node
    if (ref.current) {
      node = ref.current
      node.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      node.removeEventListener('mousemove', handleMouseMove)
    }
  }, [ref, handleMouseMove])

  return { mousePos: state }
}

export default useMouseHook
