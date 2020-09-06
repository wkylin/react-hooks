import React from 'react'

const Context = React.createContext([{}, () => {}])

export const UseContextReducerProvider = ({ children }) => {
  const state = React.useState({})
  const value = React.useMemo(() => state, [state[0]])
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default function useContextReducer(
  contextKey,
  reducer,
  initialState,
  initialAction
) {
  const [contextState, setContextState] = React.useContext(Context)
  let [state] = React.useReducer(reducer, initialState, initialAction)

  if (contextState[contextKey] != null) {
    state = contextState[contextKey]
  }

  const dispatch = (action) =>
    setContextState((prevState) =>
      Object.assign({}, prevState, {
        [contextKey]: reducer(prevState[contextKey], action),
      })
    )

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

  return [state, dispatch]
}
