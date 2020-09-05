import React from 'react'

const Context = React.createContext([{}, () => {}])

export const ContextStateProvider = ({ children }) => {
  const state = React.useState({})
  const value = React.useMemo(() => state, [state[0]])
  console.log('value', value)
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default function useContextState(contextKey, initialState) {
  const [contextState, setContextState] = React.useContext(Context)

  const state =
    contextState[contextKey] != null ? contextState[contextKey] : initialState

  const setState = (nextState) =>
    setContextState((prevState) =>
      Object.assign({}, prevState, {
        [contextKey]:
          typeof nextState === 'function' ? nextState(prevState) : nextState,
      })
    )

  // React.useMutationEffect(() => {
  React.useLayoutEffect(() => {
    if (contextState[contextKey] == null && state != null) {
      setContextState((prevState) => {
        if (prevState[contextKey] == null) {
          return Object.assign({}, prevState, {
            [contextKey]: state,
          })
        }
        return prevState
      })
    }
  }, [contextKey])

  return [state, setState]
}
