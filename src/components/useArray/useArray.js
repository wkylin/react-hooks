import React from 'react'

export default (initialArray) => {
  const [value, setValue] = React.useState(initialArray)
  const push = React.useCallback((a) => {
    setValue((v) => [...v, ...(Array.isArray(a) ? a : [a])])
  }, [])

  const removeIndex = React.useCallback(
    (index) =>
      setValue((v) => {
        const copy = v.slice()
        copy.splice(index, 1)
        return copy
      }),
    []
  )

  const actions = React.useMemo(
    () => ({
      setValue,
      push,
      removeIndex,
    }),
    [push, removeIndex]
  )

  return [value, actions]
}
